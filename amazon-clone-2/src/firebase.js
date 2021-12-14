// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAC2qvoy0DfbKoGtEKZyT3e1J3mphWMapQ",
    authDomain: "clone-2-46594.firebaseapp.com",
    projectId: "clone-2-46594",
    storageBucket: "clone-2-46594.appspot.com",
    messagingSenderId: "93906728016",
    appId: "1:93906728016:web:b6a4f9599dd0214a3f4d55",
    measurementId: "G-WFK7BBTKH7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); 
const auth = firebase.auth();


  export {db, auth};