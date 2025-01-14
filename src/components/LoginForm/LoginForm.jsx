import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "sanuvi" || password === "1234") {
      SignIn();
    }
    setErrorMessage("Username and password are required.");
    return;
  };

  const SignUp = () => {
    navigate("/signup");
  };

  const SignIn = () => {
    navigate("/home2");
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <div className="inputGroup">
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <button
        type="button"
        className="forgotPassword"
        onClick={() => alert("Password recovery not implemented yet.")}
      >
        Forgot password?
      </button>
      <button type="submit" className="submitButton" onClick={SignIn}>
        Sign In
      </button>
      <div className="signupPrompt">Don't have an account?</div>
      <button type="button" className="signupLink" onClick={SignUp}>
        Sign Up
      </button>
    </form>
  );
}
