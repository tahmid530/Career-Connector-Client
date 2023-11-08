// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9DX2Qn7-ViKma5rBs4-yMn2DpG-ZLB0",
  authDomain: "assignment-11-cd7b0.firebaseapp.com",
  projectId: "assignment-11-cd7b0",
  storageBucket: "assignment-11-cd7b0.appspot.com",
  messagingSenderId: "230632815410",
  appId: "1:230632815410:web:bd7709d68d868337b8f52b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth