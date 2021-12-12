'use strict';

export const validateEmail = (email: string) => {
  const check = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  return check !== null;
};

export const isNull = (value: unknown) => {
  return value === null;
};

export const isBlank = (str: string) => {
  return !str || /^\s*$/.test(str);
};

export const validatePassword = (pwd: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pwd);
};
