import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hook/useAuth.tsx"

export default function ProfilePage() {
  const { user, error, loading, loadProfile, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadProfile();
  }, []);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  if (!user) return 

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
