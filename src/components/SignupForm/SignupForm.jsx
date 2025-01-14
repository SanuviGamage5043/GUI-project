import React from "react";
import "./SignupForm.css"; // Import global CSS

export default function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="email" className="label">
          Email or Phone Number
        </label>
        <input
          id="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="username" className="label">
          Create a Username
        </label>
        <input
          id="username"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password" className="label">
          Create a Password
        </label>
        <input
          id="password"
          type="password"
          className="input"
          minLength="8"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="confirmPassword" className="label">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="input"
          required
        />
      </div>
      <button type="submit" className="signup-button">
        Sign Up
      </button>
    </form>
  );
}
