'use strict';

export type BaseResponse<T> = {
  success?: boolean;
  data?: T | null;
  message?: string | null;
};

export type PartialUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};
