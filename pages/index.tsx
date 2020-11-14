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

function HomePage() {
  const submitForm = (event) => {
    alert('test');
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  };

  return (
    <>
      <div>Welcome to {process.env.SITE_NAME}!</div>
      <form onSubmit={submitForm}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>submit</button>
      </form>
    </>
  );
}

export default HomePage
