import React, { useState } from "react";
import firebase from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userActions";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((userCredential) => {
        dispatch(setUser(userCredential));
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // TODO: handle user creation
      })
      .catch((error) => {
        // TODO: handle errors
      });
  };

  return (
    <div className="login">
      <div className="logincard">
        <h1>Login</h1>
        <div className="form">
          <div className="each">
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="each">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <button className="signin" onClick={handleSignIn}>
          Log In
        </button>
        <button className="signin" onClick={handleSignUp}>
          Register
        </button>
        <button className="google" onClick={handleGoogleSignIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
