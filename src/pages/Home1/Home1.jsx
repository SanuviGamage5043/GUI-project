import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import './Home1.css'; // Import the regular CSS file

export default function Home1() {
  return (
    <main className="container">
      <h1 className="title">Welcome to Blossom Bliss</h1>
      <LoginForm />
    </main>
  );
}
