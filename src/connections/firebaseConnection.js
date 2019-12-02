import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCK2kwvB7QmweiExlmGxEeLgEIpOdAoS78",
    authDomain: "disegnoapp.firebaseapp.com",
    databaseURL: "https://disegnoapp.firebaseio.com",
    projectId: "disegnoapp",
    storageBucket: "disegnoapp.appspot.com",
    messagingSenderId: "730760611425",
    appId: "1:730760611425:web:f8c139e8a7573105c74c20",
    measurementId: "G-1S4SW44GCC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;