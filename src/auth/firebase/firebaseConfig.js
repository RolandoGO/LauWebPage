import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


let config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lauweb-9bff9.firebaseapp.com",
  databaseURL: "https://lauweb-9bff9-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_PROJEC_ID ,
  storageBucket: "lauweb-9bff9.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSJ_SENDER_ID ,
  appId: process.env.REACT_APP_ID
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const storage = firebase.storage()
export const auth = firebase.auth()

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
