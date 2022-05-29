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
   const [regErrorMsg, setRegErrorMsg] = useState({
      email:'',
      password:''
   });

   onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
   });

   const register = async (callback) => {
      try {
         const user = await createUserWithEmailAndPassword(
             auth,
             registerEmail,
             registerPassword
         );

         if(callback){
            callback();
         }
      } catch (error) {
         if(error.message === "Firebase: Error (auth/email-already-in-use)."){
            setRegErrorMsg(prevState => ({
               ...prevState,
               email:"Already Email Used!"
            }));
         }

         else if(error.message === "Firebase: Error (auth/invalid-email)."){
            setRegErrorMsg(prevState => ({
               ...prevState,
               email: 'Invalid Email Address!'
            }));
         }
         else{
             setRegErrorMsg(prevState => ({
                 ...prevState,
                 email: 'Server Error!🤦‍♀️'
             }))
         }
          console.log(error.message,'reg')
      }
   };

   const login = async (callback) => {
      try {
         const user = await signInWithEmailAndPassword(
             auth,
             loginEmail,
             loginPassword
         );
          if(callback){
              callback();
          }
      } catch (error) {
         if(error.message === "Firebase: Error (auth/user-not-found)."){
            setRegErrorMsg(prevState => ({
               ...prevState,
               email:'Email not found'
            }));
         }

         if(error.message === "Firebase: Error (auth/wrong-password)."){
            setRegErrorMsg(prevState => ({
               ...prevState,
               password: 'Wrong password'
            }));
         }
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
          regErrorMsg,
          setRegErrorMsg,
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