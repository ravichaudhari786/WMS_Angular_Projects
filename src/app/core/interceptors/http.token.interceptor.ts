import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@core/authentication/token.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig:any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',

    };

    if(this.tokenService.valid())
    {
      const token = this.tokenService.get();
      if (token) {
      headersConfig.Authorization = `Bearer ${token.accessToken}`;
      }
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
