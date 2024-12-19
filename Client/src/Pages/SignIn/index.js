import React, { useContext, useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { myContext } from "../../App";
import logo from "../../assets/images/logo.png";


const SignIn = () => {
    const context = useContext(myContext);

    useEffect(()=> {
        context.setisHeaderFooterShow(false);
    },[]);
    return (
        <>
            <div className="signInPage">
            <div className="signin-container d-flex justify-content-center align-items-center">
                <div className="signin-card">
                    <div className="text-center">
                    <img src={logo} className="w-50"/>
                    </div>
                    <h2 className="signin-title">Sign In</h2>
                    <form className="signin-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Sign In
                        </button>
                        <div className="text-center mt-3">
                            <a href="#forgot" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>
                    </form>
                    <div className="social-login">
                        <p className="text-center">Or sign in with</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-primary mr-2">
                                <FaFacebook /> Facebook
                            </button>
                            <button className="btn btn-outline-danger">
                                <FaGoogle /> Google
                            </button>
                        </div>
                    </div>
                    <div className="signup-link text-center mt-4">
                        Don't have an account? <a href="#signup">Sign Up</a>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default SignIn; 