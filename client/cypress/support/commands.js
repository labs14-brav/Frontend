/**
 * Dependencies
 */

const firebase = require('firebase');

/**
 * Constants
 */

const firebaseConfig = {
  apiKey: "AIzaSyBvzVQ-z1QTrLw1-F0Wu4T-893_CAomYCA",
  authDomain: "brav-3077e.firebaseapp.com",
  databaseURL: "https://brav-3077e.firebaseio.com",
  projectId: "brav-3077e",
  storageBucket: "brav-3077e.appspot.com",
  messagingSenderId: "373999219897",
  appId: "1:373999219897:web:d583304cf31051df"
};

/**
 * Initialize firebase
 */

firebase.initializeApp(firebaseConfig);

/**
 * Define commands
 */

Cypress.Commands.add("login", (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
})

Cypress.Commands.add("logout", (email, password) => {
  return firebase.auth().signOut();
})
