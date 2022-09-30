import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJ7cMwN8uwB16SIXQmt0186zhF4tLEJKQ",
    authDomain: "mundogammer-ecommerce.firebaseapp.com",
    projectId: "mundogammer-ecommerce",
    storageBucket: "mundogammer-ecommerce.appspot.com",
    messagingSenderId: "159150074569",
    appId: "1:159150074569:web:2a4f465d166360b7cabb18"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);

