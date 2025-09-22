import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Outlet, Link, useNavigate } from "react-router-dom";
import appFirebase from "../credenciales";

const auth = getAuth(appFirebase);

function Home({ correoUsuario }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // manda al login
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#F8F4E3', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#50C9C3' }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-bold" href="#">Bookify</a>
          <span className="navbar-text text-white me-3">
            Usuario: {correoUsuario}
          </span>
          <button
            className="btn"
            style={{ backgroundColor: '#F8F4E3', color: '#4A90E2' }}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>

      {/* Navegación secundaria */}
      <div className="p-3 d-flex gap-2 justify-content-center" style={{ backgroundColor: '#E0F7F5' }}>
        <Link className="btn btn-primary rounded-pill" to="/dashboard">Dashboard</Link>
        <Link className="btn btn-primary rounded-pill" to="/create-accomodation">Nueva Acomodación</Link>
        <Link className="btn btn-primary rounded-pill" to="/booking">Crear Booking</Link>
      </div>

      {/* Contenido */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
