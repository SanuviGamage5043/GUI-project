import React, { useState } from "react";
import "./SignupForm.css";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      email,
      username,
      password,
      confirmPassword,
    });
    alert("Sign Up Successful! (Demo)");
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="inputGroup">
        <label htmlFor="email" className="label2">Email </label>
        <input
          id="email"
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="username" className="label2">Create a Username</label>
        <input
          id="username"
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="password" className="label2">Create a Password</label>
        <input
          id="password"
          type="password"
          className="input"
          minLength="8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="confirmPassword" className="label2">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          className="input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="signupButton">Sign Up</button>
    </form>
  );
}
