import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Token, User } from './interface';
import { guest } from './user';
import {ApiService} from './api.service';
import {LocalStorageService} from '@shared/services/storage.service';
import { STATUS } from 'angular-in-memory-web-api/http-status-codes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User>(guest);

  //private userReq$ = this.http.get<User>('/me');

  constructor(private http: HttpClient, private token: TokenService, private api:ApiService,private store:LocalStorageService) {
    // this.token
    //   .change()
    //   .pipe(switchMap(() => (this.check() ? this.userReq$ : of(guest))))
    //   .subscribe(user => this.user$.next(Object.assign({}, guest, user)));

    this.token
      .refresh()
      .pipe(switchMap(() => this.refresh()))
      .subscribe();
  }

  check() {
    return this.token.valid();
  }

  login(username: string, password: string, rememberMe = false) {


    return this.api.post('/login', { username: username, password: password,rememberMe:rememberMe })
    .pipe(map(data => {
      // login successful if there's a jwt token in the response
      //console.log(user);
      if (data && data.user.Token) {
        const currentUser:User={
          userId:data.user.UserID,
          username:username,
          email:'',
          roleId:data.user.RoleID,
          warehouseId:0,
          warehouseName:'',
          companyId:data.user.CompanyID,
          FinantialYearId:0
        }
        if(data.warehouseList.length<2){
          //var warehouse=user.sploginlist;
          currentUser.warehouseId=data.warehouseList[0].WarehouseID;
          currentUser.warehouseName=data.warehouseList[0].WareHouseName;
        }

          this.store.set('currentUser',JSON.stringify(currentUser));
          this.store.set('token',data.user.Token);



      }
      return data;
  })
  );

    // return this.http
    //   .post<Token>('/auth/login', { email, password, remember_me: rememberMe })
    //   .pipe(
    //     tap(token => this.token.set(token)),
    //     map(() => this.check())
    //   );
  }

  refresh() {
    return this.http.post<Token>('/auth/refresh', {}).pipe(
      tap(token => this.token.set(token, true)),
      map(() => this.check())
    );
  }

  logout() {
    return this.http.post('/auth/logout', {}).pipe(
      tap(() =>{
        this.token.clear();
        this.store.clear();
      }),
      map(() => !this.check())
    );
  }

  user() {
    return this.user$.pipe(share());
  }
}
