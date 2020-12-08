import firebase from "firebase/app";

const registerSubmit = (event) => {
  event.preventDefault();

  const emailData = event.target.email.value;
  const passwordData = event.target.password.value;

  firebase.auth().createUserWithEmailAndPassword(emailData, passwordData).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
};

export function RegisterForm() {
  return(
    <div>
      <form onSubmit={registerSubmit}>
        <div>Register</div>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>submit</button>
      </form>
    </div>
  );
}
