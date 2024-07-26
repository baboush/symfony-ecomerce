import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, retry, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '@app/core/models/entities';

interface Login {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.apiUrl;
  token: string | null = null;

  login(data: Login): Observable<HttpResponse<LoginResponse>> {
    return this.http
      .post<LoginResponse>(`${this.API_URL}api/login`, data, {
        observe: 'response',
      })
      .pipe(
        retry(2),
        tap((response) => {
          if (!!response.body && !!response) this.token = response.body.token;
        }),
      );
  }

  subscription(data: Partial<User>): Observable<any> {
    return this.http
      .post<LoginResponse>(`${this.API_URL}user/signIn`, data, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(retry(2));
  }
}
