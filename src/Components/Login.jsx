import React from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Ingresar</h3>
          <div className="form-group mt-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingresa tu email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingresa tu passdword"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button variant="dark" className="dark">
              Login
            </Button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="/">Olvidaste tu password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
