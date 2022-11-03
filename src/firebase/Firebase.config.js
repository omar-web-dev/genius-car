// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

apiKey: "AIzaSyDaYrCeKuP8jdjCYtKnsF9ahESPa351c8U",
  authDomain: "genies-car.firebaseapp.com",
  projectId: "genies-car",
  storageBucket: "genies-car.appspot.com",
  messagingSenderId: "538902950680",
  appId: "1:538902950680:web:b8d49b29dba1bc3e8e246d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDaYrCeKuP8jdjCYtKnsF9ahESPa351c8U",
//   authDomain: "genies-car.firebaseapp.com",
//   projectId: "genies-car",
//   storageBucket: "genies-car.appspot.com",
//   messagingSenderId: "538902950680",
//   appId: "1:538902950680:web:b8d49b29dba1bc3e8e246d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default app