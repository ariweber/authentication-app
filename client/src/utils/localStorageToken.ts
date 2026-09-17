const KEY = "token";

export function getToken() {
  return localStorage.getItem(KEY);
}

export function addToken(token: string) {
  localStorage.setItem(KEY, token);
}

export function clearToken() {
  localStorage.removeItem(KEY);
}
