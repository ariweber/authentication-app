import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "../components/Input/Input.tsx"
import SubmitButton from "../components/SubmitButton/SubmitButton.tsx"
import useAuth from "../hook/useAuth.tsx"

export default function LoginPage() {
  const { login, user, error, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user, navigate]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login({ email, password });
      }}
    >
      <Input label="Email" value={email} placeholder="enter Email" onChange={setEmail}  />
      <Input label="Password" value={password} placeholder="enter password" onChange={setPassword} />
      {error && <p>{error}</p>}
      <SubmitButton text="Login" disabled={loading} />
    </form>
  );
}
