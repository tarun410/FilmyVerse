import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcyLW9J79chifPFYx4G0UgbDDjJ76vfj0",
  authDomain: "filmyverse-abf91.firebaseapp.com",
  projectId: "filmyverse-abf91",
  storageBucket: "filmyverse-abf91.appspot.com",
  messagingSenderId: "576523769409",
  appId: "1:576523769409:web:1f6b4ca9bf7003335d98c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const moviesRef  = collection(db,"movies")
export const reviewsRef  = collection(db,"reviews")
export const usersRef  = collection(db,"users")


 
export default app ;