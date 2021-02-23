import React from "react";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
// var firebase = require("firebase");
// var firebaseui = require("firebaseui");

function Signin() {
  const ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(firebase.auth());
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        // document.getElementById("loader").style.display = "none";
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: "<your-tos-url>",
    // Privacy policy url.
    privacyPolicyUrl: "<your-privacy-policy-url>",
  };
  // ui.start;
  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     fireabase.auth.EmailAuthProvider.doSignIn
  //   ]
  // })
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("success sign up");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  // function doSignIn(event) {
  //   event.preventDefault();
  //   const email = event.target.signInEmail.value;
  //   const password = event.target.signInPassword.value;
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(function () {
  //       console.log("success sign in");
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // }
  // function doSignOut() {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(function () {
  //       console.log("success sign out");
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // }
  ui.start("#firebaseui-auth-container", uiConfig);

  // if (firebaseui.auth.AuthUI.getInstance()) {
  //   const ui = firebaseui.auth.AuthUI.getInstance();
  //   return ui.start("#firebaseui-auth-container", uiConfig);
  // } else {
  //   const ui = new firebaseui.auth.AuthUI(firebase.auth());
  //   return ui.start("#firebaseui-auth-container", uiConfig);
  // }

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Sign up </button>
      </form>
      {/* <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input type="text" name="signInEmail" placeholder="email" />
        <input type="password" name="signInPassword" placeholder="password" />
        <button type="submit">Sign in</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign Out</button> */}
      <div id="firebaseui-auth-container"></div>
    </React.Fragment>
  );
}

export default Signin;
