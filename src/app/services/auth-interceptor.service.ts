import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  elem: any;

  constructor(@Inject(DOCUMENT) private document: any, private _router: Router) {
    this.elem = document.documentElement;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req = req.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    return next.handle(req)
      .pipe(
        // timeout(environment.timeout),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            localStorage.clear();
            swal.fire({
              position: 'center', icon: 'error',
              title: 'Sesión expirada!!', text: 'Inicie sesión nuevamente',
              showConfirmButton: true
            }).then(() => {
              this._router.navigate(['/login']);
            });
          } else if (err.status === 404) {
            swal.fire('El servidor no pudo encontrar el contenido solicitado.', 'Error 404', 'error');
          } else if (err.status === 405) {
            swal.fire('El método solicitado no es conocido por el servidor.', 'Error 405', 'error');
          } else if (err.status === 500) {
            swal.fire('El servidor ha encontrado una situación que no sabe como manejarla.', 'Error 500', 'error');
          } else {
            swal.fire('El servidor no responde.', 'Error TimeOut', 'error');
          }
          return throwError(err);
        })
      );
  }

}
