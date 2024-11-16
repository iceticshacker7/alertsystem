import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // Your Firebase configuration object here
  apiKey: "AIzaSyC9vJhcxf-vqE9tR3wzsDuJ2vQeq1ZA11E",
  authDomain: "peronalisedalertsys.firebaseapp.com",
  projectId: "peronalisedalertsys",
  storageBucket: "peronalisedalertsys.firebasestorage.app",
  messagingSenderId: "66962458361",
  appId: "1:66962458361:web:2ed8a36549f7f23d0e8428",
  measurementId: "G-YSRFJHY24V",
  databaseURL: "https://peronalisedalertsys-default-rtdb.firebaseio.com",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)