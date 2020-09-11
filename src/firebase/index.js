import * as firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const app =  firebase.initializeApp({
    apiKey: "AIzaSyATjFF-EhTiaDAS_KLbY58hQM6hlEtJfGY",
    authDomain: "santiv-ecommerce.firebaseapp.com",
    databaseURL: "https://santiv-ecommerce.firebaseio.com",
    projectId: "santiv-ecommerce",
    storageBucket: "santiv-ecommerce.appspot.com",
    messagingSenderId: "758728569249",
    appId: "1:758728569249:web:83f1ad08dee2951c899be0",
    measurementId: "G-ZC0WX949HT"
  });

  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }