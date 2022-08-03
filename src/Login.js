import React from "react";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="maindiv">
        <div class="container">
          <div className="logo">Login To Subscribe package</div>
          <div className="login-item">
            <form action="" method="post" className="form form-login">
              <div className="form-field">
                <input
                  id="login-username"
                  type="text"
                  className="form-input"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="form-field">
                <input
                  id="login-password"
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-field">
                <input type="submit" value="Log in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
