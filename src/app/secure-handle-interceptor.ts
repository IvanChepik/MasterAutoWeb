import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RedirectService } from './auth/services/redirect.service';

@Injectable()
export class SecureHandleInterceptor implements HttpInterceptor {

    constructor(private router: Router, private redirectService:RedirectService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(request).pipe(tap(() => { },
            (err: any) => {
                
                if (err instanceof HttpErrorResponse) {
                    if (err.status == 401) {
                        this.redirectService.redirectToNoAccess(this.router);
                    }
                    if (err.status == 409){
                        throwError("Что-то пошло не так");
                    }
                    
                }
            }));
    }
}