import React, { Component } from "react";

export default class ResetPassword extends Component {
    render() {
        return (
            <form>
                <h3>Reset Password</h3>

                <div className="form-group">
                    <label>Password</label>
                    <input type="email" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter confirm password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Reset Password</button>
                <p className="forgot-password d-flex justify-content-around">
                    <a href="/register">Signup</a>
                    <a href="/login">login</a>
                </p>
            </form>
        );
    }
}