import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy_lkUHRT676gsr-pH4643lvKK8lntjzA",
  authDomain: "twitter-clone-2b4fe.firebaseapp.com",
  projectId: "twitter-clone-2b4fe",
  storageBucket: "twitter-clone-2b4fe.appspot.com",
  messagingSenderId: "472807628302",
  appId: "1:472807628302:web:257f14844dcd09585ae65f",
  measurementId: "G-RWR2H2WX3Y",
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export default getFirestore(app);
