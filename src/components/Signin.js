import React from "react";
import firebase from "firebase/app";

function Signin(){
  function doSignUp(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("succes sign up");
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
  function doSignIn(event){
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
      console.log("success sign in");
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
  function doSignOut(){
    firebase.auth().signOut().then(function(){
      console.log("success sign out");
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
  return(
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="password"/>
        <button type="submit">Sign up </button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
      <input type="text" name="signInEmail" placeholder="email"/>
      <input type="password" name="signInPassword" placeholder="password"/>
      <button type="submit">Sign in</button>
      </form>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  );
}

export default Signin;