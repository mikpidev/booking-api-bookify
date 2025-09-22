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
    onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase || null);
    });
  }, []);

  if (!usuario) return <Login />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home correoUsuario={usuario.email} />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-accomodation" element={<CreateAccomodation />} />
          <Route path="accomodation/:id" element={<AccomodationDetail />} />
          <Route path="accomodations/update/:id" element={<UpdateAccomodation />} />
          <Route path="status_booking/:id" element={<StatusBooking />} />
          <Route path="booking" element={<CreateBooking />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
