import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const [userArray, setuserArray] = useState([]);
  useEffect(() => {
    if (user) {
      setuserArray(user);
    }
  }, [user]);
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Página Home</h1>
      <p>Bem-vindo à página inicial!</p>
      <p>Você está logado e pode ver a Navbar.</p>
    </div>
  );
}