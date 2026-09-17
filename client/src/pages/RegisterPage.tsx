import { useState } from "react";
import Input from "../components/Input/Input.tsx";
import SubmitButton from "../components/SubmitButton/SubmitButton.tsx";
import useAuth from "../hook/useAuth.tsx";

export default function RegisterPage() {
  const { register, error, loading } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register({ username: name, email, password });
      }}
    >
      <Input label="Name" value={name} placeholder="enter name" onChange={setName} />
      <Input label="Email" value={email} placeholder="enter email" onChange={setEmail} />
      <Input label="Password" value={password} placeholder="enter password" onChange={setPassword} />
      {error && <p>{error}</p>}
      <SubmitButton text="Register" disabled={loading} />
    </form>
  );
}
