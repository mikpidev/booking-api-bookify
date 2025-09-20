import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/Login'
import Home from './components/Home'
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div className='App'>
      {usuario ? <Home /> : <Login />}
    </div>
  )
}

export default App
