
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBRvcj2ZH2SwcpvmPCTpXOFUzoX8Lk_7kg",
  authDomain: "tiktokhully.firebaseapp.com",
  projectId: "tiktokhully",
  storageBucket: "tiktokhully.appspot.com",
  messagingSenderId: "307019987326",
  appId: "1:307019987326:web:c336a6c523e8b837fd9b2f",
  measurementId: "G-FQ269VXLX4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
