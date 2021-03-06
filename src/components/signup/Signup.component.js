import React, { Component } from "react";
import "../login/login.styles.scss";

class SignUp extends Component {
    render() {
        return (
            <div className="block shadow p-3">
                <div className="p-3 mb-2 mb-3 text-white block__heading d-flex justify-content-center">
                    Sign up
                </div>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUp;
