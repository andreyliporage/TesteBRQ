import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService extends BaseService implements HttpInterceptor {

  constructor(private loadingService: LoadingService, protected router: Router) { super() }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.loadingService.setLoading(true, request.url);
    return next.handle(request)
      .pipe(catchError((err) => {
        this.servicoErro(err)
        this.loadingService.setLoading(false, request.url);
        return throwError(err);
      }))
      .pipe(map<any, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this.loadingService.setLoading(false, request.url);
        }
        return evt;
      }));
  }
}
