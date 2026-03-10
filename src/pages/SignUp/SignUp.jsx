import React from "react"; 
import "./SignUp.css";
import SignupForm from "../../components/SignupForm/SignupForm";

export default function SignUp() {
  return (
    <main className="signupContent">
      <h1 className="signupTitle">Create a New Account</h1>
      <SignupForm />
    </main>
  );
}
