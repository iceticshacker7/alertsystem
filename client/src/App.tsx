import Component from "./component/Alert";
import Auth from './pages/Auth'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './lib/firebase'
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [])
  
  return (
  user ? <Component user={user}/> : <Auth />
  )
}

export default App
