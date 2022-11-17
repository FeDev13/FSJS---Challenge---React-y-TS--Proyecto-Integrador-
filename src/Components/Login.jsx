import React from "react";

import Navbar from "./NavBar";

import "../styles/login.css";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image"></div>
            </div>
            <div>
              <h1>Login</h1>
              <div>
                <input type="text" placeholder="usuario" className="name" />
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                />
              </div>
              <div className="login-button">
                <button className="log">Login</button>
              </div>

              <p className="link">
                <a href="/">Olvidaste tu contrasena ?</a> O
                <a href="/">Registrate</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
