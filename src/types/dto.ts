'use strict';

import { AxiosResponse } from 'axios';
import { PartialUser } from './globals';

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

export type ILoginResponseDTO = AxiosResponse<{ user: PartialUser; token: string }>;
