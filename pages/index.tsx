import firebase from "firebase/app";
import "firebase/auth";

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: IFirebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  projectId: process.env.PROJECT_ID,
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: `G-${process.env.MEASUREMENT_ID}`,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function listenToCurrentUserState(): void {
  firebase.auth().onAuthStateChanged((user: any): void => {
    if (user) {
      user.getIdToken().then((idToken: string): void => {
        console.log('Token:', `Bearer ${idToken}`);
      });
      window.sessionStorage.user = JSON.stringify(user);
    } else {
      console.log('Not logged in.');
    }
  });
}

function HomePage() {
  const registerSubmit = (event) => {
    event.preventDefault();

    const emailData = event.target.email.value;
    const passwordData = event.target.password.value;

    firebase.auth().createUserWithEmailAndPassword(emailData, passwordData).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  };

  const loginSubmit = (event) => {
    event.preventDefault();

    const emailData = event.target.email.value;
    const passwordData = event.target.password.value;

    firebase.auth().signInWithEmailAndPassword(emailData, passwordData).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  };

  listenToCurrentUserState();

  return (
    <>
      <div>Welcome to {process.env.SITE_NAME}!</div>
      <div>
        <form onSubmit={registerSubmit}>
          <div>Register</div>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button>submit</button>
        </form>
      </div>
      <div>
        <form onSubmit={loginSubmit}>
          <div>Login</div>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <button>submit</button>
        </form>
      </div>
    </>
  );
}

export default HomePage
