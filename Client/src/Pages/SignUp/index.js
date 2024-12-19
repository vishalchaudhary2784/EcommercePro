
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../App";
import logo from "../../assets/images/logo.png";

const SignUp = () => {

    const context = useContext(myContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    }, []);

    return (
        <>

            <div className="signUpPage">
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <div className="card shadow-lg p-4" style={{ width: "400px" }}>
                        <div className="text-center">
                            <img src={logo} className="w-50" />
                        </div>
                        <h5 className=" mb-2">Create an Account</h5>
                        <form>
                            {/* Full Name */}
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Create a password"
                                    required
                                />
                            </div>
                            {/* Confirm Password */}
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary w-100">
                                Sign Up
                            </button>
                            {/* Sign-In Link */}
                            <div className="text-center mt-3">
                                <p className="mb-0">
                                    Already have an account?{" "}
                                    <Link to="/signin" className="text-primary">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SignUp;