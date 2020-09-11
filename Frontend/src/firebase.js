import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6MGhn9W8u9BXq_RKBNsiuVvlCnkRTpe8",
    authDomain: "whatsapp-clone-c8933.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c8933.firebaseio.com",
    projectId: "whatsapp-clone-c8933",
    storageBucket: "whatsapp-clone-c8933.appspot.com",
    messagingSenderId: "820664923486",
    appId: "1:820664923486:web:5cff770487953cf6658bcf",
    measurementId: "G-PY5L9DWDED"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// const auth = firebaseApp.firebase.auth();
// const provider = new firebase.auth.GoogleAuth.provider();

// export { auth, provider};
export default db;