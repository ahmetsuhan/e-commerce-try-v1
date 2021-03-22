import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDTYYOYNpFU0FfjeSQp7o7eUmIoiqVMmaA",
    authDomain: "crwn-db-c86d5.firebaseapp.com",
    projectId: "crwn-db-c86d5",
    storageBucket: "crwn-db-c86d5.appspot.com",
    messagingSenderId: "243022372692",
    appId: "1:243022372692:web:2a14d944f7d28f1a5772c1"
  };

  export const createUserProfileDOcument = async (userAuth,additionalData) =>{
    if(!userAuth){
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName:displayName,
          email:email,
          createdAt:createdAt,
          ...additionalData
        });
      }catch(error){
          console.log(error);
      }
    }

    return userRef;
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  //google auth
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
