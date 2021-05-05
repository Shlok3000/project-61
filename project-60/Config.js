import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBIygCQa6n8Ak2SLvEbhMAkZ3918_84zPU",
    authDomain: "attendance-ba55c.firebaseapp.com",
    projectId: "attendance-ba55c",
    storageBucket: "attendance-ba55c.appspot.com",
    messagingSenderId: "379955224682",
    appId: "1:379955224682:web:23d75fdccda05ae0f96a13"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.database();