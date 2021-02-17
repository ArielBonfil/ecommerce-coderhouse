import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCMC_2pGZK8IBFZ7xYF57ItDieKtEESrbc",
  authDomain: "coderhouse-ecommerce-8103e.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8103e",
  storageBucket: "coderhouse-ecommerce-8103e.appspot.com",
  messagingSenderId: "238598892208",
  appId: "1:238598892208:web:51a39ae4b8cee9c17ea975",
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
//export other firebase integrations
