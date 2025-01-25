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
console.log("Firebase Auth inicializado:", auth); // Verifica que Firebase Auth está correctamente inicializado

// Manejador del formulario de inicio de sesión
const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("Formulario de inicio de sesión enviado"); // Confirmar que el evento submit se capturó

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(` Correo ingresado: ${email}, Contraseña ingresada: ${password}`); // Verifica que los valores se capturan correctamente

    // Inicia sesión
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log("Inicio de sesión exitoso:", user); // Verifica que el inicio de sesión fue exitoso y los datos del usuario

            // Mostrar mensaje de bienvenida
            alert(` Bienvenido ${user.email}`);
            
            // Ocultar el formulario de login
            document.getElementById('login-form').style.display = 'none';
            console.log("Formulario de inicio de sesión ocultado"); // Verifica que el formulario se oculta correctamente
            
            // Mostrar el panel del usuario
            document.getElementById('user-panel').style.display = 'block';
            console.log("Panel del usuario mostrado"); // Verifica que el panel del usuario se muestra
            
            // Mostrar el nombre y correo del usuario
            document.getElementById('user-name').textContent = user.displayName || 'Usuario';
            document.getElementById('user-email').textContent = user.email;
            console.log("Datos del usuario actualizados en la interfaz"); // Verifica que los datos se muestren correctamente
        })
        .catch((error) => {
            console.error("Error en inicio de sesión:", error); // Muestra el error detallado en la consola
            alert(` Error: ${error.message}`);
        });
});

// Cerrar sesión
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    console.log("Intentando cerrar sesión..."); // Confirma que el evento del botón de cerrar sesión se ejecuta
    auth.signOut()
        .then(() => {
            // Ocultar el panel de usuario
            document.getElementById('user-panel').style.display = 'none';
            console.log("Panel de usuario ocultado"); // Verifica que el panel se oculta correctamente

            // Mostrar el formulario de login nuevamente
            document.getElementById('login-form').style.display = 'block';
            console.log("Formulario de inicio de sesión mostrado nuevamente"); // Verifica que el formulario se muestra correctamente

            alert('Has cerrado sesión correctamente');
        })
        .catch((error) => {
            console.error("Error al cerrar sesión:", error); // Muestra el error detallado en la consola
            alert(` Error al cerrar sesión: ${error.message}`);
        });
});
