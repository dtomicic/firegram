import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoRwwgJahXYol8pTv71rOWweEtqzLYNM8",
    authDomain: "firegram-30075.firebaseapp.com",
    projectId: "firegram-30075",
    storageBucket: "firegram-30075.appspot.com",
    messagingSenderId: "555281934747",
    appId: "1:555281934747:web:b40859d29b6139830f193e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };