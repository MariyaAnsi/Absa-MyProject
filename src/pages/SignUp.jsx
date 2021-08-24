import React, {useState} from "react";
import { Redirect,Link} from "react-router-dom";
import firebaseConfig  from "../common/Fire.jsx";
import './SignUp.css';

import validator from 'validator';



const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);  
  const [emailError, setEmailError] = useState('') 
  const [passwordError,setpasswordError]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

 //validate email

  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  //validate password
  const validatePassword = (e) => {
    var email = e.target.value
  
    if (validator.isStrongPassword(email)) {
      setpasswordError('Strong password :)')
    } else {
      setpasswordError('Enter Strong password!')
    }
  }
  

  if (currentUser) {
      return <Redirect to="/login" />
  }
  return (
    
    <section className="signup"> 
        <div className="signupContainer">
            <div className='signuplabel'>
            <label>Sign In</label>
            </div>

      
            <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" onChange={(e) => validateEmail(e)}/>
            <span style={{fontWeight: 'bold',color: 'red',}}>{emailError}</span>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={(e) => validatePassword(e)}/>
            <span style={{fontWeight: 'bold',color: 'red',}}>{passwordError}</span>
            <div className="btnContainer">
            <button type="submit">Submit</button>
            <div className="loginlink">
            <p>Have an account?{" "}
            <Link to="/login" className="link">Login</Link>
            </p>
            </div>
            </div>
            </form>
    
         </div>
    </section>
  )
 };

export default SignUp;
