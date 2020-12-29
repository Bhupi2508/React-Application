import React, { Component } from "react";

export default class ForgotPassword extends Component {
    render() {
        return (
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Forgot Password</button>
                <p className="forgot-password d-flex justify-content-around">
                    <a href="/register">Signup</a>
                    <a href="/login">login</a>
                </p>
            </form>
        );
    }
}