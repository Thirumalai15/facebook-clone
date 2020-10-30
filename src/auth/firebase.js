import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBLN9l87n-ObqlIzFRnd2I3d3QYx7C3-SA",
    authDomain: "facebook-clone-1219f.firebaseapp.com",
    databaseURL: "https://facebook-clone-1219f.firebaseio.com",
    projectId: "facebook-clone-1219f",
    storageBucket: "facebook-clone-1219f.appspot.com",
    messagingSenderId: "624606861836",
    appId: "1:624606861836:web:c1487c7b7971017662ac29",
    measurementId: "G-C8M85SFVHW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

 export { auth , provider };
 export default db;
  