import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/auth",
});

export type User = {
  _id: string;
  email: string;
  name: string;
};

export type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export async function register(data: RegisterData) {
  const res = await api.post<{ user: User }>("/register", data);
  return res.data;
}

export async function login(data: LoginData) {
  const res = await api.post<{ user: User; token: string }>("/login", data);
  return res.data;
}

export async function profile(token: string) {
  const res = await api.get<{ user: User }>("/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
