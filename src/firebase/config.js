import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoRwwgJahXYol8pTv71rOWweEtqzLYNM8",
    authDomain: "firegram-30075.firebaseapp.com",
    projectId: "firegram-30075",
    storageBucket: "firegram-30075.appspot.com",
    messagingSenderId: "555281934747",
    appId: "1:555281934747:web:b40859d29b6139830f193e"
};

const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};