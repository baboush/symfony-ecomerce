import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@app/services';
import { Observable } from 'rxjs';

export function AuthInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const auth = inject(AuthService);
  const token = auth.token;

  if (!token) return next(request);

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

  const newRequest = request.clone({
    headers,
  });

  return next(newRequest);
}
