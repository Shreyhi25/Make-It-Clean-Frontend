import React, { useState } from "react";
import "./Forget.css";
import forget from "./forget.avif";
import { MailOutlined, UnlockOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";

export default function Forgetpass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmpassword);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      alert("Password reset successfully!");
    } else {
      alert("Password does not match!");
    }
  };

  return (
    <div>
      <div className='forget'>
        <div className="forget-box1">
          <h2 className="forget-head">FORGOT <br /> YOUR PASSWORD?</h2>
          <p className='forget-p'>Enter the email address <br />associated with your account.</p>

          <Input
            size="large"
            className='forget-input'
            required
            type='email'
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            prefix={<MailOutlined />}
          /><br />

          <Input
            className='forget-input'
            size="large"
            name="password"
            id="password"
            value={password}
            type='text'
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your New Password"
            required
            prefix={<UnlockOutlined />}
          /><br />

          <Input
            className='forget-input'
            size="large"
            type='text'
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder="Confirm Your Password"
            required
            prefix={<UnlockOutlined />}
          /><br />

          <button className='forget-btn' onClick={handleUpdate}>RESET</button>
        </div>
        <div className="forget-box2">
          <img className="forget-img" src={forget} alt="" />
        </div>
      </div>
    </div>
  );
}
