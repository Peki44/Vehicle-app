import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyB4kSSXQmxzA3S9tUQJa9PlDO2i2GSOyYY",
  authDomain: "autostore-917cf.firebaseapp.com",
  projectId: "autostore-917cf",
  storageBucket: "autostore-917cf.appspot.com",
  messagingSenderId: "842929713398",
  appId: "1:842929713398:web:9a9355d306ea39a3307cd7"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export default app;