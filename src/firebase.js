// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 추가

const firebaseConfig = {
  apiKey: "AIzaSyC75fdsC93p_Aojx3bphh56wIqUUajemts",
  authDomain: "worklog-todo-app.firebaseapp.com",
  projectId: "worklog-todo-app",
  storageBucket: "worklog-todo-app.appspot.com",
  messagingSenderId: "161227165658",
  appId: "1:161227165658:web:df2d0ce561cfdb498bfae3",
};
const app = initializeApp(firebaseConfig);

// Firestore 추가
export const db = getFirestore(app);

export default app;
