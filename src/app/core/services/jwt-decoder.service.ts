import { Injectable } from '@angular/core';
import { DecodedUserToken } from '../models/decoded-user-token';

@Injectable({
  providedIn: 'root',
})
export class JwtDecoderService {
  decodeToken(token: string | null): DecodedUserToken | undefined {
    if (!token) {
      return undefined;
    }

    const decodedString = decodeURIComponent(escape(atob(token.split('.')[1])));
    return JSON.parse(decodedString);
  }
}
