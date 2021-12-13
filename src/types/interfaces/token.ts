'use strict';

export interface IDecodedToken {
  userId: number;
  name: string;
  email: string;
  iat: number;
  exp: number;
}
