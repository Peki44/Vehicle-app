import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBdh7ubGnxVYehpI5UDaEZpw7jeeEctg1U",
  authDomain: "autostore2-95df8.firebaseapp.com",
  projectId: "autostore2-95df8",
  storageBucket: "autostore2-95df8.appspot.com",
  messagingSenderId: "44840741153",
  appId: "1:44840741153:web:ed0bff7d1adc8259ebf660"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export default app;