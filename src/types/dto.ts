'use strict';

import { AxiosResponse } from 'axios';
import { PartialUser } from './globals';
import { ProjectModel } from './models';

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

export type LoginResponseDTO = AxiosResponse<{ token: string }>;
export type GetAppDataResponseDTO = AxiosResponse<{ user: PartialUser }>;
export type GetCountResponseDTO = AxiosResponse<{ count: number }>;

export type GetProjectDTO = AxiosResponse<{ collection: ProjectModel[] }>;
