import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { doSignOut } from "./SignOut";
import firebase from "firebase/app";

function Header() {
  const { isAuthenticated } = useState(null);

  const handleLogout = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("success sign out");
      })
      .catch(function (error) {
        console.log(error.message);
      });
    console.log("logout successful");
  };
  return (
    <>
      <h1>Flashcards</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <Link onClick={handleLogout} to="/">
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
