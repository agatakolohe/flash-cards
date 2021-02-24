import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { doSignOut } from "./SignOut";
import firebase from "firebase/app";

function Header() {
  // const [boolState, isSignedOut] = useState(true);
  const auth = firebase.auth.EmailAuthProvider.PROVIDER_ID;
  const [boolState, isSignedOut] = useState(auth);
  // if (auth != null) {
  //   isSignedOut(!boolState);
  // }
  const handleLogout = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(function () {
        isSignedOut(boolState === null);
        console.log("success sign out");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };
  return (
    <>
      <h1>Flashcards</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {boolState ? (
          <>
            <Link onClick={handleLogout} to="/signin">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </ul>
    </>
  );
}

export default Header;
