import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';

// import app from '../Firebase/firebase.config'


export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleAuth= new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
      const [loading, setLoading]= useState(true)
      const [user, setUser]= useState([])

      // create user 
      const signIn =(email,pass)=>{
            setLoading(true)
            return  createUserWithEmailAndPassword(auth,email,pass);
      }

      //update profile
      const setProfile=(name,photourl)=>{
            setLoading(true)
            return updateProfile(auth.currentUser,{
                  displayName:name, photoURL:photourl
            })
      }


      // sign out 

      const logOut=()=>{
            setLoading(true)
            return signOut(auth)
            .then(()=>{})
            .catch(()=>{})
      }

      // sign in with email password 

      const signInEmail =(email,pass)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,pass);
      }

      //sign in google
      const googleSignIn=()=>{
            setLoading(true)
            return  signInWithPopup(auth,googleAuth);
      }


      // user state set 
      useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,currentUser=>{
                  setUser(currentUser);
                  setLoading(false)
            })

            return ()=>{
                 return unsubscribe
            }
      })
     
      const authInfo = {
            user,
            signIn,
            setProfile,
            logOut,
            signInEmail,
            googleSignIn
      }

      
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;