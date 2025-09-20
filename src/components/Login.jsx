import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

function Login() {

  const [registrando, setRegistrando] = React.useState(false);

  const funcAunticar = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      catch (error) {
        console.log("La contraseña debe tener más de 8 caracteres y el correo debe ser válido", error);
      }
    }
      else {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        }
      catch (error) {
        console.log("Contraseña o email incorrectos", error);
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{width: '400px'}}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">
            {registrando ? "Crear Cuenta" : "Iniciar Sesión"}
          </h2>
          <form onSubmit={funcAunticar}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                id="email" 
                type="email" 
                className="form-control" 
                placeholder="Ingrese email" 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input 
                id="password" 
                type="password" 
                className="form-control" 
                placeholder="Ingrese password" 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              {registrando ? "Registrarse" : "Iniciar Sesión"}
            </button>
          </form>
          <div className="text-center">
            <p className="mb-2">
              {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
            </p>
            <button 
              className="btn btn-link p-0" 
              onClick={() => setRegistrando(!registrando)}
            >
              {registrando ? "Iniciar Sesión" : "Registrarse"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
