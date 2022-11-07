import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iif, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { TokenService } from '../authentication/token.service';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { ToastrService}  from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class StartupService {
  private menuReq$ = this.http.get('/me/menu');
  delay(ms: number,route:Router) {
    // return new Promise( resolve => setTimeout(resolve, ms) );
    setTimeout(() => {
      //window.location.href="/dashboard";
      this.route.navigateByUrl('/dashboard');
  }, ms);
  }
  constructor(
    private injector: Injector,
    private route:Router,
    private token: TokenService,
    private menu: MenuService,
    private http: HttpClient,
    private permissonsSrv: NgxPermissionsService,
    private rolesSrv: NgxRolesService
    
   
  ) {}
  /** Load the application only after get the menu or other essential informations such as roles and permissions. */
  load(): Promise<any> {
    // debugger;
   
let strcollectionName=window.location.href;//reqInfo.collectionName;
strcollectionName= strcollectionName.substring(strcollectionName.lastIndexOf("/") + 1, strcollectionName.length);
strcollectionName=strcollectionName.replace("%20"," ");
    return new Promise((resolve, reject) => {
      this.token
        .change()
        .pipe(
          switchMap(() => iif(() => this.token.valid(), this.menuReq$, of({ menu: [] }))),
          catchError(error => throwError(error))
        )
        .subscribe((response: any) => {
         // this.menu.addNamespace(response.menu, 'menu');
          this.menu.set(response.menu);
          // Demo purposes only. You can add essential permissions and roles with your own cases.
          const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
          this.permissonsSrv.loadPermissions(permissions);
          this.rolesSrv.addRoles({ ADMIN: permissions });
          // Tips: Alternative you can add permissions with role at the same time.
          // this.rolesSrv.addRolesWithPermissions({ ADMIN: permissions });
          resolve(null);
// debugger;
let menu1=response.menu;
let flg=false;
for(var i=0;i<menu1.length;i++){
    for(var j=0;j<menu1[i].children.length;j++){
          if(strcollectionName==menu1[i].children[j].name){
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
if(strcollectionName=="dashboard"){
  return true;
}
else if(strcollectionName=="login"){ 
  return true;
}
//if(flg==false && strcollectionName!="dashboard"){
else if(flg==false){
  
this.injector.get<ToastrService>(ToastrService).info("you are not authorised for this page","Info");
this.delay(2000,this.route);
return false;
}
else{
return false;
}
          
        });
    });
  }
}