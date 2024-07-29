import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '@app/core/models/entities';
import { LocalStorageService } from '@app/core/services';
import { jwtDecode } from 'jwt-decode';
import { Observable, retry, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

interface Login {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface Roles {
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.apiUrl;
  private readonly storage = inject(LocalStorageService);
  private isAuthenticated = false;

  token: string | null = null;

  login(data: Login): Observable<HttpResponse<LoginResponse>> {
    this.isAuthenticated = true;
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

  logout(): boolean {
    this.storage.clearStorage();
    return !this.isAuthenticated;
  }

  subscription(data: Partial<User>): Observable<any> {
    return this.http
      .post<LoginResponse>(`${this.API_URL}user/signIn`, data, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(retry(2));
  }

  authenticated(): boolean {
    return this.isAuthenticated;
  }

  getRole(): boolean {
    const token = this.storage.getStorage('token');
    let tokenDecode;
    if (!!token) tokenDecode = jwtDecode<Roles>(token);

    if (!!tokenDecode?.roles.includes('ROLE_ADMIN')) {
      return true;
    }
    return false;
  }
}
