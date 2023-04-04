import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-v6mvCkcXtBKbBKNYSNZGHJygtS3_Ozo",
  authDomain: "e-store-73046.firebaseapp.com",
  projectId: "e-store-73046",
  storageBucket: "e-store-73046.appspot.com",
  messagingSenderId: "1083465107095",
  appId: "1:1083465107095:web:a6148ab215f591dd210bd2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, app }