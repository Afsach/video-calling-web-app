import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "zoom-clone-2d7b6.firebaseapp.com",
  projectId: "zoom-clone-2d7b6",
  storageBucket: "zoom-clone-2d7b6.appspot.com",
  messagingSenderId: "85766126758",
  appId: "1:85766126758:web:c48e29553bb1f776770867",
  measurementId: "G-31H0BNP89B"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
