import { Navigate } from "react-router"
import type { ReactNode } from "react";
import { getToken } from "../utils/localStorageToken.ts";

type ProtectedType = {
  children: ReactNode;
};

export default function Protected({ children }: ProtectedType) {
  if (!getToken()) return <Navigate to="/login" replace={true} />;

  return children;
}
