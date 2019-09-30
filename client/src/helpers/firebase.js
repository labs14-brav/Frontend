const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyBvzVQ-z1QTrLw1-F0Wu4T-893_CAomYCA",
  authDomain: "brav-3077e.firebaseapp.com",
  databaseURL: "https://brav-3077e.firebaseio.com",
  projectId: "brav-3077e",
  storageBucket: "brav-3077e.appspot.com",
  messagingSenderId: "373999219897",
  appId: "1:373999219897:web:d583304cf31051df"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();
const documentsRef = storageRef.child("documents");
const profileImageRef = storageRef.child("profile-image");

export { documentsRef, profileImageRef };

const provider = new firebase.auth.GoogleAuthProvider();

const Firebase = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  storageRef: storage.ref(),
  documentsRef: storageRef.child("documents"),
  profileImageRef: storageRef.child("profile-image"),
  signInWithGoogle: () => {
    firebase.auth().signInWithRedirect(provider);
  },
  signUpWithEmail: (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signInWithEmail: (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signOut: () => firebase.auth().signOut()
};

export default Firebase;

// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: async function (authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function () {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById("loader").style.display = "none";
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: "popup",
//   signInSuccessUrl: "/auth/callback",
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Terms of service url.
//   tosUrl: "/terms-of-service",
//   // Privacy policy url.
//   privacyPolicyUrl: "/privacy-policy"
// };

// function wrappedStart() {
//   ui.start("#firebaseui-auth-container", uiConfig);
// }
