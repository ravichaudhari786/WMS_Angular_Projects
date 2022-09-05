import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '@shared';
import { User } from './interface';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private store:LocalStorageService
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  getCurrentUser(){
     const currentUser:User=JSON.parse(this.store.get("currentUser"));
    //  if(currentUser){
    //  return currentUser;}
    //  else
    //  return null;
    return currentUser;
  }

  getUserID(){
    const currentUser:User=JSON.parse(this.store.get("currentUser"));
    if(currentUser){
      return currentUser.userId;
    }
    return 0;
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.baseUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {},params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.put(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body),{params}
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {},params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body),{params}
    ).pipe(catchError(this.formatErrors));
  }

  delete(path:string,params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(
      `${environment.baseUrl}${path}`,{params}
    ).pipe(catchError(this.formatErrors));
  }
}
