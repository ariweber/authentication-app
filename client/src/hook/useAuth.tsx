import { useState } from "react";
import { login, register, profile } from "../api/api.ts";
import type { User, RegisterData, LoginData } from "../api/api.ts";
import { addToken, getToken, clearToken } from "../utils/localStorageToken.ts";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(data: RegisterData) {
    setError("");
    setLoading(true);
    try {
      const res = await register(data);
      setUser(res.user);
    } catch (e) {
      setError("request failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(data: LoginData) {
    setError("");
    setLoading(true);
    try {
      const res = await login(data);
      addToken(res.token);
      setUser(res.user);
    } catch (e) {
      setError("request failed");
    } finally {
      setLoading(false);
    }
  }

  async function loadProfile() {
    const token = getToken();
    if (!token) return;
    setError("");
    setLoading(true);
    try {
      const res = await profile(token);
      setUser(res.user);
    } catch (e) {
      setError("request failed");
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    clearToken();
    setUser(null);
  }

  return {
    user,
    error,
    loading,
    register: handleRegister,
    login: handleLogin,
    loadProfile,
    logout,
  };
}
