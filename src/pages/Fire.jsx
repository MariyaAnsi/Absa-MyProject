 
 import firebase from "firebase";
 
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB3LFpg6rN4M1eeT7YBuzEr8cJtBDdRkTM",
    authDomain: "absa-9e306.firebaseapp.com",
    projectId: "absa-9e306",
    storageBucket: "absa-9e306.appspot.com",
    messagingSenderId: "199903033607",
    appId: "1:199903033607:web:1c6ea83823e8418562eda2"
  };
  // Initialize Firebase
  
  const Fire=firebase.initializeApp(firebaseConfig);

  var db=firebase.firestore();

  export {db};
  export default Fire;