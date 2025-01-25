// Importa Firebase desde sus módulos
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGzpz2j4-fYgXjuJ-vz5vUlxafci3_lnI",
    authDomain: "plataforma-estudiantes-bbc1a.firebaseapp.com",
    projectId: "plataforma-estudiantes-bbc1a",
    storageBucket: "plataforma-estudiantes-bbc1a.appspot.com",
    messagingSenderId: "160878281876",
    appId: "1:160878281876:web:6fadcbdc68e5c23591a081",
    measurementId: "G-RJ6ZKSJEJK"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Manejador del formulario de inicio de sesión
const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Inicia sesión
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Bienvenido, ${user.email}`); // Interpolación correcta
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});
