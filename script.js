// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGzpz2j4-fYgXjuJ-vz5vUlxafci3_lnI",
    authDomain: "plataforma-estudiantes-bbc1a.firebaseapp.com",
    projectId: "plataforma-estudiantes-bbc1a",
    storageBucket: "plataforma-estudiantes-bbc1a.firebasestorage.app",
    messagingSenderId: "160878281876",
    appId: "1:160878281876:web:6fadcbdc68e5c23591a081",
    measurementId: "G-RJ6ZKSJEJK"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Manejo del formulario de inicio de sesión
const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Inicio de sesión con Firebase Authentication
    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            alert('Bienvenido, ${username}');
            console.log("Usuario autenticado:", userCredential.user);
        })
        .catch((error) => {
            // Error en el inicio de sesión
            console.error("Error al iniciar sesión:", error);
            alert("Credenciales incorrectas o error en la autenticación");
        });
});
