import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../pages/Auth.js";
import firebaseConfig  from "../pages/Fire.jsx";
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
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
            
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
            
            <div className="btnContainer">
            <button type="submit">Submit</button>
            
            </div>
      </form>

    
       </div>
    </section>
  )
};

export default Login;