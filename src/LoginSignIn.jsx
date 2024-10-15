import React, { useState, useEffect } from 'react';
import './LoginSign.css'
import { FaEnvelope, FaLocationArrow, FaLock, FaPhone, FaUser } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';

const SlidingLoging = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        location: '',
        password: '',
    });

    const [loginData, setLoginData] = useState({
        mobiles: '',
        password: ''
    });

    useEffect(() => {
        const signinbtn = document.querySelector('.signinbtn');
        const signupbtn = document.querySelector('.signupbtn');
        const formBx = document.querySelector('.formBx');
        const body = document.querySelector('body');

        if (signupbtn && signinbtn && formBx && body) {
            signupbtn.onclick = () => {
                formBx.classList.add('active');
                body.classList.add('active');
                setIsSignUp(true);
            };
            signinbtn.onclick = () => {
                formBx.classList.remove('active');
                body.classList.remove('active');
                setIsSignUp(false);
            };
        }
    }, []);

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Example API request
        axios.post('http://192.168.189.180:3232/api/User/addUser', formData)
            .then(response => {
                console.log('Sign Up Success:', response);
            })
            .catch(error => {
                console.error('Sign Up Error:', error);
            });
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        // Example API request
        axios.post('http://192.168.189.180:3232/api/User/addUser', loginData)
            .then(response => {
                console.log('Sign In Success:', response);
            })
            .catch(error => {
                console.error('Sign In Error:', error);
            });
    };

    return (
        <div className="Container">
            <div className="BlueBg">
                <div className="Box signin">
                    <h2>Already Have An Account?</h2>
                    <button className="btn btn-primary signinbtn">Sign In</button>
                </div>
                <div className="Box signup">
                    <h2>Don't Have An Account?</h2>
                    <button className="btn btn-warning signupbtn">Sign Up</button>
                </div>
            </div>
            <div className="formBx">
                {isSignUp ? (
                    <div className="form signupform">
                        <form onSubmit={handleSignUpSubmit} method="post">
                            <h3>Sign Up</h3>
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleSignUpChange}
                                    placeholder="Enter Your First Name"
                                    required
                                />
                                <FaUser className="Icon" />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleSignUpChange}
                                    placeholder="Enter Your Last Name"
                                    required
                                />
                                <FaUser className="Icon" />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleSignUpChange}
                                    placeholder="Enter Email Id"
                                    required
                                />
                                <FaEnvelope className="Icon" />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleSignUpChange}
                                    placeholder="Enter Your Mobile Number"
                                    required
                                />
                                <FaPhone className="Icon" />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleSignUpChange}
                                    placeholder="Enter Your Location"
                                    required
                                />
                                <FaLocationArrow className="Icon" />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleSignUpChange}
                                    placeholder="Create Password"
                                    required
                                />
                                <FaLock className="Icon" />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Register"
                            />
                        </form>
                    </div>
                ) : (
                    <div className="form signinform">
                        <form onSubmit={handleSignInSubmit} method="post">
                            <h3>Sign In</h3>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={loginData.email}
                                    onChange={handleSignInChange}
                                    placeholder="Enter Your Registered Email ID"
                                    required
                                />
                                <FaUser className="Icon" />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={loginData.password}
                                    onChange={handleSignInChange}
                                    placeholder="Enter Password"
                                    required
                                />
                                <FaLock className="Icon" />
                            </div>
                            <input type="submit" className="btn btn-warning" value="Login"/>
                            <Link to='/Forget' className="forgot">Forgot Password</Link>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SlidingLoging;
