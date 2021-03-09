// ANCHOR: Firebase Imports
// DOCS: https://firebase.google.com/docs/auth/web/manage-users
import firebase from "firebase/app";
import "firebase/auth";

// ANCOR: Redux Imports
import { reduxStore } from '../../state/store';
import { authenticateAction } from '../../state/actions';

// ANCHOR: Utility Imports
import { checkWindowObject } from '../checkWindowObject';

// ANCHOR Firebase Config Types
interface IFirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}

// ANCHOR: Firebase Config (Private Object)
const $firebaseConfig: IFirebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: `G-${process.env.MEASUREMENT_ID}`,
};

// ANCHOR: Base Social Authentication (Private Function)
const $baseSocialAuthentication = (provider: any): void => {
  firebase.auth().signInWithPopup(provider).then((result: any): void => {
    console.log('Successfully signed in.', result);
  }).catch(function(error: any): void {
    console.error('Something went wrong while signing in!', error);
  });
}

// ANCHOR: Base Password Authentication (Private Function)
const $basePasswordAuthentication = (
  email: string,
  password: string,
  type: "signInWithEmailAndPassword" | "createUserWithEmailAndPassword",
): void => {
  firebase.auth()[type](email, password).then((user) => {
    console.log('User has been authenticated.', user);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error('Error:', errorMessage, errorCode);
  });
}

// ANCHOR: Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp($firebaseConfig);
}

// ANCHOR: User Logged In
export function isUserLoggedIn(): boolean {
  return !!(checkWindowObject && window.sessionStorage.length);
}

// ANCHOR: State Listener
export function listenToCurrentUserState(): void {
  if (checkWindowObject) {
    firebase.auth().onAuthStateChanged(function(user: any): void {
      if (user) {
        user.getIdToken(true).then((idToken: string): void => {
          reduxStore.dispatch(authenticateAction(idToken));
        });
        window.sessionStorage.user = JSON.stringify(user);
      } else {
        reduxStore.dispatch(authenticateAction(null));
      }
    });
  }
}

// ANCHOR: User Sign Out
export function userSignOut(): void {
  firebase.auth().signOut().then((): void => {
    console.log('User has been signed out.');
  }).catch(function(error: any): void {
    console.error('Something went wrong while signing out!', error);
  });
}

// ANCHOR: Password Authentication (Create User)
// DOCS: https://firebase.google.com/docs/auth/web/password-auth
export const passwordCreate = (email: string, password: string): void => {
  $basePasswordAuthentication(email, password, "createUserWithEmailAndPassword");
}

// ANCHOR: Password Authentication (Login User)
// DOCS: https://firebase.google.com/docs/auth/web/password-auth
export const passwordSignIn = (email: string, password: string): void => {
  $basePasswordAuthentication(email, password, "signInWithEmailAndPassword");
}

// ANCHOR: Google Authentication
// DOCS: https://firebase.google.com/docs/auth/web/google-signin
export const googleSignIn = (): void => {
  $baseSocialAuthentication(new firebase.auth.GoogleAuthProvider());
}

// ANCHOR: Facebook Authentication
// DOCS: https://firebase.google.com/docs/auth/web/facebook-login
export const facebookSignIn = (): void => {
  $baseSocialAuthentication(new firebase.auth.FacebookAuthProvider());
}

// ANCHOR: GitHub Authentication
// DOCS: https://firebase.google.com/docs/auth/web/github-auth
export const githubSignIn = (): void => {
  $baseSocialAuthentication(new firebase.auth.GithubAuthProvider());
}

// ANCHOR: Twitter Authentication
// DOCS: https://firebase.google.com/docs/auth/web/twitter-login
export const twitterSignIn = (): void => {
  $baseSocialAuthentication(new firebase.auth.TwitterAuthProvider());
}
