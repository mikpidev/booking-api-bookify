import React from "react";
import { getAuth, signOut } from "firebase/auth";
import appFirebase from "../credenciales";
const auth = getAuth(appFirebase);

function Home({correoUsuario}) {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Bookify!</p>
      <p>Your email: {correoUsuario}</p>
      <button onClick={() => auth.signOut()}>Cerrar Sesión</button>
    </div>
  );
}

export default Home;
