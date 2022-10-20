import { Injectable,OnInit } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from '@core/authentication/interface';
import { environment } from '@env/environment';
import { LocalStorageService } from '@shared';
import { ApiService } from '@core';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

function urlSafeBase64Encode(text: string) {
  return btoa(text).replace(/[+/=]/g, m => {
    return { '+': '-', '/': '_', '=': '' }[m] as string;
  });
}

function urlSafeBase64Decode(text: string) {
  return atob(
    text.replace(/[-_]/g, m => {
      return { '-': '+', '_': '/' }[m] as string;
    })
  );
}

function generateToken(user: User) {
  const expiresIn = 3600;
  const header = JSON.stringify({ typ: 'JWT', alg: 'HS256' });
  const payload = JSON.stringify({ exp: Math.ceil(new Date().getTime() / 1000) + expiresIn, user });
  const key = 'ng-matero';

  const accessToken = [
    urlSafeBase64Encode(header),
    urlSafeBase64Encode(payload),
    urlSafeBase64Encode(key),
  ].join('.');

  return {
    access_token: accessToken,
    token_type: 'bearer',
    expires_in: expiresIn,
  };
}

function is(reqInfo: RequestInfo, path: string) {
  if (environment.localUrl) {
    return false;
  }

  return new RegExp(`${path}(/)?$`, 'i').test(reqInfo.req.url);
}
function fetch1(url: string) {
  let content: any = null;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.onload = () => (content = xhr.responseText);
  xhr.send();

  return content;
}
function is1(reqInfo: RequestInfo,userid:string,path: string) {
  debugger;
  let flg=false;
const strbaseapi=reqInfo.apiBase;
let strcollectionName=window.location.href;//reqInfo.collectionName;
strcollectionName= strcollectionName.substring(strcollectionName.lastIndexOf("/") + 1, strcollectionName.length);
strcollectionName=strcollectionName.replace("%20"," ");

const currentUser=JSON.parse(userid);
if(strbaseapi!="me" && strcollectionName!="menu"){
  let menu=fetch1(environment.baseUrl+"/Menu/GetMenu?userid="+currentUser.userId);

       menu=JSON.parse(menu);
      for(var i=0;i<menu.menu.length;i++){
          for(var j=0;j<menu.menu[0].children.length;j++){
                if(strcollectionName==menu.menu[i].children[j].name){
                  flg=true;
                  break;
                }
                else{
                  continue;
                }
            }
if(flg==true){
  break;
}
else{
  continue;
}
}      

  //const menu = JSON.parse(this.fetch('assets/data/menu.json?_t=' + Date.now())).menu;
   if(flg==false){
alert("you are not autherised for this page");
//router.navigateByUrl('/dashboard');
window.location.href="/dashboard";
return false;
   }else{
    return new RegExp(`${path}(/)?$`, 'i').test(reqInfo.req.url);
   }
  
}
else{
  return new RegExp(`${path}(/)?$`, 'i').test(reqInfo.req.url);
}
  
}
function getUserFromJWTToken(req: HttpRequest<any>) {
  const authorization = req.headers.get('Authorization');
  const [, token] = (authorization as string).split(' ');
  try {
    const [, payload] = token.split('.');

    const data = JSON.parse(urlSafeBase64Decode(payload));
    const d = new Date();
    d.setUTCSeconds(data.exp);
    if (new Date().getTime() > d.getTime()) {
      return null;
    }

    return data.user;
  } catch (e) {
    return null;
  }
}

@Injectable({
  providedIn: 'root',
})
export class InMemDataService implements OnInit,  InMemoryDbService {
  constructor(
    private store:LocalStorageService) {
    }
 
  ngOnInit() {
   
    // const currentUser=JSON.parse(this.store.get("currentUser"));
  }
  private users: User[] = [

  ];
  

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    
    return { users: this.users };
  }
  
  get(reqInfo: RequestInfo) {
   
    if (is(reqInfo, 'sanctum/csrf-cookie')) {
      return reqInfo.utils.createResponse$(() => {
        const { headers, url } = reqInfo;

        return { status: STATUS.NO_CONTENT, headers, url, body: {} };
      });
    }

    if (is(reqInfo, 'me/menu')) {
      debugger;
      return reqInfo.utils.createResponse$(() => {
        const { headers, url } = reqInfo;
        
        const currentUser=JSON.parse(this.store.get("currentUser"));
      
       
       //const menu = JSON.parse(this.fetch('assets/data/menu.json?_t=' + Date.now())).menu;
        
       const menu=  JSON.parse(this.fetch(environment.baseUrl+"/Menu/GetMenu?userid="+ currentUser.userId)).menu
       
        return { status: STATUS.OK, headers, url, body: { menu } };
      });
    }

    if (is1(reqInfo,this.store.get("currentUser"), 'me')) {
debugger;
     

      return reqInfo.utils.createResponse$(() => {
       
        const { headers, url } = reqInfo;
        const user = getUserFromJWTToken(reqInfo.req as HttpRequest<any>);

        if (!user) {
           return { status: STATUS.UNAUTHORIZED, headers, url, body: {} };
          
        }

        return { status: STATUS.OK, headers, url, body: user };
      });
    }

    return;
  }

  post(reqInfo: RequestInfo) {
   
    

    if (is(reqInfo, 'auth/login')) {
      return this.login(reqInfo);
    }

    if (is(reqInfo, 'auth/refresh')) {
      return this.refresh(reqInfo);
    }

    if (is(reqInfo, 'auth/logout')) {
      return this.logout(reqInfo);
    }

    return;
  }

  private login(reqInfo: RequestInfo) {
  
    return reqInfo.utils.createResponse$(() => {
      const { headers, url } = reqInfo;
      const req = reqInfo.req as HttpRequest<any>;
      const { email, password } = req.body;
      const currentUser = Object.assign(
        {},
        this.users.find(user => user.email === email || user.username === email)
      );

      if (!currentUser) {
        return { status: STATUS.UNAUTHORIZED, headers, url, body: {} };
      }

      if (currentUser.password !== password) {
        return {
          status: STATUS.UNPROCESSABLE_ENTRY,
          headers,
          url,
          error: {
            errors: {
              password: ['The provided password is incorrect.'],
            },
          },
        };
      }

      delete currentUser.password;

      return { status: STATUS.OK, headers, url, body: generateToken(currentUser) };
    });
  }

  private refresh(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url } = reqInfo;
      const user = getUserFromJWTToken(reqInfo.req as HttpRequest<any>);
      if (!user) {
        return { status: STATUS.UNAUTHORIZED, headers, url, body: {} };
      }

      return { status: STATUS.OK, headers, url, body: generateToken(user) };
    });
  }

  private logout(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url } = reqInfo;

      return { status: STATUS.OK, headers, url, body: {} };
    });
  }

  private fetch(url: string) {
    let content: any = null;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.onload = () => (content = xhr.responseText);
    xhr.send();

    return content;
  }
}
