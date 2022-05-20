import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCARby9HniuGGCrYIR5eSQ8PMKqoL_VhGY",
  authDomain: "fir-auth-a0d5d.firebaseapp.com",
  projectId: "fir-auth-a0d5d",
  storageBucket: "fir-auth-a0d5d.appspot.com",
  messagingSenderId: "131127968758",
  appId: "1:131127968758:web:1ca127123d76f90fb33dd7",
  measurementId: "G-DTZJJL9JQP"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)