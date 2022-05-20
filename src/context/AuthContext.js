import React, {createContext, useState} from 'react';

import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
} from "firebase/auth";
import {auth} from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

   const [registerEmail, setRegisterEmail] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");
   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");

   const [user, setUser] = useState({});
   console.log(user, 'user')

   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   });

   const register = async () => {
      try {
         const user = await createUserWithEmailAndPassword(
             auth,
             registerEmail,
             registerPassword
         );
         console.log(user);
      } catch (error) {
         console.log(error.message);
      }
   };

   const login = async () => {
      try {
         const user = await signInWithEmailAndPassword(
             auth,
             loginEmail,
             loginPassword
         );
         console.log(user);
      } catch (error) {
         console.log(error.message);
      }
   };

   const logout = async () => {
      await signOut(auth);
   };


   return (
       <AuthContext.Provider value={{
          registerEmail,
          setRegisterEmail,
          registerPassword,
          setRegisterPassword,
          loginEmail,
          setLoginEmail,
          loginPassword,
          setLoginPassword,
          user,
          setUser,
          register,
          login,
          logout
       }}>
          {children}
       </AuthContext.Provider>
   );
};

export default AuthProvider;