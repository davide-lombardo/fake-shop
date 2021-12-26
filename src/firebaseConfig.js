import { initializeApp } from 'firebase/app'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import { 
  getAuth,
  // onAuthStateChanged,
  // signOut,
  // signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
} from 'firebase/auth'
//import { useState, useEffect } from 'react'


const firebaseConfig = {
   apiKey: "AIzaSyCuDDnxJMVQj7FPS45BPfyr6AK4yI1oaS0",
   authDomain: "e-app-8e18f.firebaseapp.com",
   projectId: "e-app-8e18f",
   storageBucket: "e-app-8e18f.appspot.com",
   messagingSenderId: "535525205609",
   appId: "1:535525205609:web:8c92ad2dd609232c3fe4f8",
   measurementId: "G-ZBN8Y1GT95"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export { auth, app };




// export function signIn(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
// } 


// export function logOut() {
//   return signOut(auth)
// }


// export function logIn(email, password) {
//   return signInWithEmailAndPassword(auth, email, password)
// } 


// export function useAuth() {
//   const [currentUser, setCurrentUser] = useState()

//   useEffect(() => {
//     const unSub = onAuthStateChanged(auth, user => setCurrentUser(user) )
//     return unSub
//   }, [])

//   return currentUser
// }

