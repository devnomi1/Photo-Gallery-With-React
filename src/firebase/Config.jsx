import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyADL_4FBQumzOk_TP0rRxEAryABWwFUC24",
	authDomain: "photo-gallery-bae64.firebaseapp.com",
	projectId: "photo-gallery-bae64",
	storageBucket: "photo-gallery-bae64.appspot.com",
	messagingSenderId: "880187056510",
	appId: "1:880187056510:web:79f07fa86bf6683da9932f",
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFireStore , timeStamp };


