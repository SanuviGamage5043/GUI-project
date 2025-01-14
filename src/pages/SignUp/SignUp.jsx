import React from "react"; 
import './SignUp.css';  // Import the regular CSS file
import Header from "../../components/Header/Header"; 
import SignupForm from "../../components/SignupForm/SignupForm";

export default function SignUp() {
  return (
    <main className="container">
      
      <h1 className="title">Create a new account</h1>
      <SignupForm />
    </main>
  );
}
