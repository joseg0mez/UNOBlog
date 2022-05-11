import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {

  apiKey: "YOURCONFIG",
  authDomain: "YOURCONFIG",
  projectId: "YOURCONFIG",
  storageBucket: "YOURCONFIG",
  messagingSenderId: "YOURCONFIG",
  appId: "YOURCONFIG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
