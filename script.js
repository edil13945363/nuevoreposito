const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert(Iniciando sesión como ${username});
});
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TAIzaSyCGzpz2j4-fYgXjuJ-vz5vUlxafci3_lnI",
    authDomain: "platform-students-bbc1a.firebaseapp,com",
    projectId: "plataforma-estudiantes-bbc1a",
    storageBucket: "platform-students-bbc1a.appspot.com",
    messagingSenderId: "160878281876",
    appId: "1:160878281876:web:920477d67116405d91a081"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
