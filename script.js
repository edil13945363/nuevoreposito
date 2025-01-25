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
const app = firebase.initializeApp(firebaseConfig);

// Referencia al servicio de autenticación
const auth = firebase.auth();

// Manejador del formulario de inicio de sesión
const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Inicia sesión
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Bienvenido, ${user.email}`);
            // Aquí podrías redirigir a una página de perfil o mostrar información relevante
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-message').style.display = 'block';
            alert(`Error: ${errorMessage}`);
        });
});
