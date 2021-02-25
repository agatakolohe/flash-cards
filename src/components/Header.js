import React, { useState, useSelector } from "react";
import { Link } from "react-router-dom";
// import { doSignOut } from "./SignOut";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import { toggleLogin } from "../actions";

function Header(props) {
  // const [boolState, isSignedOut] = useState(true);
  // const auth = firebase.auth.EmailAuthProvider.PROVIDER_ID;
  let [boolState, isSignedIn] = useState();
  // console.log(boolState);

  const userState = useSelector((state) => state.login);

  console.log(userState);
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        isSignedIn((boolState = false));

        console.log("success sign out");
      })
      .catch(function (error) {
        console.log(error.message);
      });
    props.onUserLogin();
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
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            {/* <Link to="/signup">Sign Up</Link> */}
          </>
        )}
      </ul>
    </>
  );
}

Header.propTypes = {
  onUserLogin: PropTypes.func,
};

export default Header;
