// ANCHOR: Firebase
// DOCS: https://firebase.google.com/docs/auth/web/manage-users
import firebase from "firebase/app";
import "firebase/auth";

// ANCOR: Redux Imports
import { reduxStore } from '../../state/store';
import { authenticateAction } from '../../state/action';

// ANCHOR: Check Window Object's Existence
import { checkWindowObject } from '../checkWindowObject';

// ANCHOR Firebase Config Type
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

// ANCHOR: Firebase Config
const _firebaseConfig: IFirebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: `G-${process.env.MEASUREMENT_ID}`,
};

// ANCHOR: Base Authentication
const _baseAuthentication = (provider: any): void => {
  firebase.auth().signInWithPopup(provider).then((result: any): void => {
    console.log('Successfully signed in.', result);
  }).catch(function(error: any): void {
    console.error('Something went wrong while signing in!', error);
  });
}

// ANCHOR: Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(_firebaseConfig);
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
        user.getIdToken().then((idToken: string): void => {
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

// ANCHOR: Google Authentication
// DOCS: https://firebase.google.com/docs/auth/web/google-signin
export const googleSignIn = (): void => {
  _baseAuthentication(new firebase.auth.GoogleAuthProvider());
}

// ANCHOR: Facebook Authentication
// DOCS: https://firebase.google.com/docs/auth/web/facebook-login
export const facebookSignIn = (): void => {
  _baseAuthentication(new firebase.auth.FacebookAuthProvider());
}

// ANCHOR: GitHub Authentication
// DOCS: https://firebase.google.com/docs/auth/web/github-auth
export const githubSignIn = (): void => {
  _baseAuthentication(new firebase.auth.GithubAuthProvider());
}

// ANCHOR: Twitter Authentication
// DOCS: https://firebase.google.com/docs/auth/web/twitter-login
export const twitterSignIn = (): void => {
  _baseAuthentication(new firebase.auth.TwitterAuthProvider());
}
