import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyChMt0g0MlTL1VgLpXO_eaR8-UB1S_LzzM",
    authDomain: "e-com-template-8fc9d.firebaseapp.com",
    databaseURL: "https://e-com-template-8fc9d.firebaseio.com",
    projectId: "e-com-template-8fc9d",
    storageBucket: "e-com-template-8fc9d.appspot.com",
    messagingSenderId: "993954444320",
    appId: "1:993954444320:web:fc1c396cf269fbe148b845"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;