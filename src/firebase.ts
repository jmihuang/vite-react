// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "fir-db-3062d.firebaseapp.com",
  projectId: "fir-db-3062d",
  storageBucket: "fir-db-3062d.appspot.com",
  messagingSenderId: "937350597360",
  appId: "1:937350597360:web:25f3ea8696e2b499281035",
  measurementId: "G-1C5QGCLGCY",
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addData() {
  try {
    const docRef = await addDoc(collection(db, "react-posts-2024"), {
      body: "Congrats! it's work!",
      title: "Post from react-application",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getData(docId) {
  const docRef = doc(db, "react-posts-2024", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}

async function updateData(docId, newData) {
  const docRef = doc(db, "users", docId);

  try {
    await updateDoc(docRef, newData);
    console.log("Document updated");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

import { deleteDoc } from "firebase/firestore";

async function deleteData(docId) {
  const docRef = doc(db, "users", docId);

  try {
    await deleteDoc(docRef);
    console.log("Document deleted");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
