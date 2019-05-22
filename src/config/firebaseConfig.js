import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBEWz168c_FUqHY_yIdq0xJDg5vacyyjLY",
    authDomain: "facebook-a5382.firebaseapp.com",
    databaseURL: "https://facebook-a5382.firebaseio.com",
    projectId: "facebook-a5382",
    storageBucket: "facebook-a5382.appspot.com",
    messagingSenderId: "355894581474",
    appId: "1:355894581474:web:ca1b21e8ed3aa519"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;