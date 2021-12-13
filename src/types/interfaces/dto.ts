'use strict';

export interface ICreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginDTO {
  email: string;
  password: string;
}
