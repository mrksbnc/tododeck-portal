'use strict';

import { IDecodedToken } from '@/types/interfaces/token';

const LOCAL_STORAGE_TOKEN = 'todo_token';

export function setToken(token: string): void {
  localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
}

export function getToken(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN);
}

export function deleteToken(): void {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
}

export function isTokenValid(): boolean {
  const token = getToken();
  if (token) {
    const tokenData = parseJwt(token);
    return Date.now() > tokenData.exp;
  } else {
    return false;
  }
}

export function parseJwt(token: string): IDecodedToken {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}
