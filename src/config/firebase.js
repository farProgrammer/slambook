import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHrmJ-i1ZSkXY_MCL6gyHfH-V2s47zmnM",
  authDomain: "slambook-6ed47.firebaseapp.com",
  databaseURL: "https://slambook-6ed47-default-rtdb.firebaseio.com",
  projectId: "slambook-6ed47",
  storageBucket: "slambook-6ed47.appspot.com",
  messagingSenderId: "17653461925",
  appId: "1:17653461925:web:b7b02751cf34958d8a2e4c",
  measurementId: "G-ZCGZ13PC9C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
