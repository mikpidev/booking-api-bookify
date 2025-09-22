import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import appFirebase from "./credenciales";

import Login from "./components/Login";
import Home from "./components/Home"; // Layout con <Outlet />
import Dashboard from "./pages/Dashboard";
import UpdateAccomodation from "./pages/UpdateAccomodation";
import CreateAccomodation from "./pages/CreateAccomodation";
import AccomodationDetail from "./pages/AccomodationDetail";
import StatusBooking from "./pages/StatusBooking";
import CreateBooking from "./pages/CreateBooking";

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase ? usuarioFirebase : null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Login público */}
        <Route path="/" element={usuario ? <Navigate to="/dashboard" /> : <Login />} />

        {/* Rutas privadas */}
        <Route path="/" element={<Home correoUsuario={usuario?.email} />}>
          <Route path="dashboard" element={usuario ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="create-accomodation" element={usuario ? <CreateAccomodation /> : <Navigate to="/" />} />
          <Route path="accomodation/:id" element={usuario ? <AccomodationDetail /> : <Navigate to="/" />} />
          <Route path="accomodations/update/:id" element={usuario ? <UpdateAccomodation /> : <Navigate to="/" />} />
          <Route path="status_booking/:id" element={usuario ? <StatusBooking /> : <Navigate to="/" />} />
          <Route path="booking" element={usuario ? <CreateBooking /> : <Navigate to="/" />} />
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
