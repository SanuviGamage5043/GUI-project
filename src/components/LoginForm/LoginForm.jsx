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

    if (username === "sanuvi" && password === "1234") {
      SignIn();
      return;
    } else if (username === "admin" && password === "admin") {
      navigate("/inventory");
      return;
    }

    setErrorMessage("Invalid username or password.");
  };

  const SignUp = () => {
    navigate("/signup");
  };

  const SignIn = () => {
    navigate("/home2");
  };

  return (
    <form className="formContainer1" onSubmit={handleSubmit}>
      <p className="formTitle">Sign In</p>

      {errorMessage && <p className="errorMessage">{errorMessage}</p>}

      <div className="inputGroup">
        <label className="label1">Username</label>
        <input
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="inputGroup">
        <label className="label1">Password</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="button"
        className="forgotPassword"
        onClick={() => alert("Password recovery not implemented yet.")}
      >
        Forgot password?
      </button>

      <button type="submit" className="submitButton">
        Sign In
      </button>

      <div className="signupPrompt">
        Don’t have an account?
        <span className="signupLink" onClick={SignUp}>
          {" "}Sign Up
        </span>
      </div>
    </form>
  );
}
