import firebase from "firebase/app";

const logOutEvent = (event) => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
};

export function LogOutButton() {
  return(
    <button onClick={logOutEvent}>
      Log Out
    </button>
  );
}

