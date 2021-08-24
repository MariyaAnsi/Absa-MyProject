import React, { useContext } from "react";
import { Redirect,Link } from "react-router-dom";
import { AuthContext } from "../pages/Auth.js";
import firebaseConfig  from "../common/Fire.jsx";

import './Login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    
    <section className="login"> 
        <div className="loginContainer">
            
            <form onSubmit={handleSubmit}>
            <label>Login</label>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
            
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
            
            <div className="btnContainer">
            <button type="submit">Submit</button>
            </div>
            <div>
              
            <p className="signuplink">
              Don't have an account?{" "}
            <Link to="/signup" className='link'>
              Sign up here 
            </Link>
           
            </p>
            
            
           
            
            </div>
      </form>

    
       </div>
    </section>
  )
};

export default Login;