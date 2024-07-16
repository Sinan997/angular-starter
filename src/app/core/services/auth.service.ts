import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtDecoderService } from './jwt-decoder.service';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import { API_URL } from '../tokens';
import { AuthResponse } from '../models/';

const accessTokenKey = 'accessToken';
const refreshTokenKey = 'refreshToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected readonly http = inject(HttpClient);
  protected readonly router = inject(Router);
  protected readonly jwtDecoderService = inject(JwtDecoderService);
  protected readonly baseUrl: string = inject(API_URL) + 'auth';

  readonly user$ = new BehaviorSubject(this.jwtDecoderService.decodeToken(localStorage.getItem(accessTokenKey)));

  get user() {
    return this.user$.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<AuthResponse>(this.baseUrl + '/login', {
        username,
        password,
      })
      .pipe(
        tap((res) => {
          this.setTokensToLocalStorage(res.accessToken, res.refreshToken);
          this.router.navigate(['']);
        }),
      )
      .subscribe();
  }

  logout() {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(refreshTokenKey);
    this.user$.next(undefined);

    this.router.navigate(['account', 'login']);
  }

  refreshTokenHttp() {
    return this.http.post<AuthResponse>(this.baseUrl + '/refresh-token', {
      refreshToken: localStorage.getItem(refreshTokenKey),
    });
  }

  setTokensToLocalStorage(accessToken: string, refreshToken: string) {
    localStorage.setItem(accessTokenKey, accessToken);
    localStorage.setItem(refreshTokenKey, refreshToken);
    this.user$.next(this.jwtDecoderService.decodeToken(accessToken));
  }
}
