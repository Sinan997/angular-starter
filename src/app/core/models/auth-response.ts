import { BasicResponseModel } from './';

export interface AuthResponse extends BasicResponseModel {
  accessToken: string;
  refreshToken: string;
}
