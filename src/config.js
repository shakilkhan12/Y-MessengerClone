import firebase from "firebase";

var firebaseConfig = {
  // your firebase config
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
