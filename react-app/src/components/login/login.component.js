import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" required />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
        <p className="forgot-password d-flex justify-content-around">
          <a href="/register" className="lg"> signup</a>
          <a href="/forgotPassword"> forgot password</a>
        </p>
      </form>
    );
  }
}