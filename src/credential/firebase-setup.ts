//import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
// // import database from '';
// // import storage from '';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '510250510237-dds8kmo22tn03l462ao2dvkii99uot63.apps.googleusercontent.com',
// });

// export default () => {
//     return { firebase, auth }
// }


//  CODE FROM HERE

// Import the functions you need from the SDKs you need
import firebase from '@react-native-firebase/app';
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-TdfaiKKbKfUOcc7KL2349WQ7Oaj9PEU",
  authDomain: "face2focus-fb756.firebaseapp.com",
  projectId: "face2focus-fb756",
  storageBucket: "face2focus-fb756.firebasestorage.app",
  messagingSenderId: "203310048119",
  appId: "1:203310048119:web:a18009dc409e0e3c90b772",
  measurementId: "G-0K1GFJV61C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);