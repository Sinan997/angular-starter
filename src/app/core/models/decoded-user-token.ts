export interface DecodedUserToken {
  _id: string;
  email: string;
  username: string;
  role: string;
  iat: number;
  exp: number;
}
