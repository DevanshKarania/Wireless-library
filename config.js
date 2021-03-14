import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCQ0GGlpB2-4K0UTNhlf9I61vI9qoDYbXU",
    authDomain: "wireless-library-9e6da.firebaseapp.com",
    databaseURL: "https://wireless-library-9e6da-default-rtdb.firebaseio.com",
    projectId: "wireless-library-9e6da",
    storageBucket: "wireless-library-9e6da.appspot.com",
    messagingSenderId: "89827769258",
    appId: "1:89827769258:web:94c0b3f98df4949803c9d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()