import { AxiosRequestConfig } from 'axios';

export class TokenFunctions {
  private static readonly LOCAL_STORAGE_TOKEN = 'token';

  public static isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  public static getAuthentication(): AxiosRequestConfig {
    return {
      headers: { Authorization: 'Bearer ' + this.getToken() },
    };
  }

  public static createFormatedTokenForHeader(token: string): string {
    return `Bearer ${token}`;
  }

  public static storeToken(token: string): void {
    localStorage.setItem(TokenFunctions.LOCAL_STORAGE_TOKEN, token);
  }

  public static getToken(): string | null {
    return localStorage.getItem(TokenFunctions.LOCAL_STORAGE_TOKEN);
  }

  public static clear(): void {
    localStorage.removeItem(TokenFunctions.LOCAL_STORAGE_TOKEN);
  }
}
