import firebase from "firebase/app";

const loginSubmit = (event) => {
  event.preventDefault();

  const emailData = event.target.email.value;
  const passwordData = event.target.password.value;

  firebase.auth().signInWithEmailAndPassword(emailData, passwordData).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
};

export function LoginForm() {
  return(
    <div>
      <form onSubmit={loginSubmit}>
        <div>Login</div>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>submit</button>
      </form>
    </div>
  );
}
