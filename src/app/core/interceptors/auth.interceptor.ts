import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/services';

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
