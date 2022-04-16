// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1aXSDxCtOKIpzyGJS_TKpQyWPDgI0AZI",
  authDomain: "travel-guru-create.firebaseapp.com",
  projectId: "travel-guru-create",
  storageBucket: "travel-guru-create.appspot.com",
  messagingSenderId: "90725582006",
  appId: "1:90725582006:web:1cb35b12b854eca61a1217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;