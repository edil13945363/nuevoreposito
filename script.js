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
firebase.initializeApp(firebaseConfig);

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

            // Mostrar mensaje de bienvenida
            alert(` Bienvenido ${user.email}`);
            
            // Ocultar el formulario de login
            document.getElementById('login-form').style.display = 'none';
            
            // Mostrar el panel del usuario
            document.getElementById('user-panel').style.display = 'block';
            
            // Mostrar el nombre y correo del usuario
            document.getElementById('user-name').textContent = user.displayName || 'Usuario';
            document.getElementById('user-email').textContent = user.email;
        })
        .catch((error) => {
            alert(` Error: ${error.message}`);
        });
});

// Cerrar sesión
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            // Ocultar el panel de usuario
            document.getElementById('user-panel').style.display = 'none';

            // Mostrar el formulario de login nuevamente
            document.getElementById('login-form').style.display = 'block';

            alert('Has cerrado sesión correctamente');
        })
        .catch((error) => {
            alert(` Error al cerrar sesión: ${error.message}`);
        });
});
