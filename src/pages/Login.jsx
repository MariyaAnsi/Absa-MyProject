import React, {useState,useEffect} from 'react';
import './Login.css'
import Fire from './Fire';
import Loginhtml from './Loginhtml';
import Hero from './Hero';






const Login=()=>{

    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);

    const clearInputs=()=>{
        setEmail('');
        setPassword('');

    };

    const clearErrors=()=>{
        setEmailError('');
        setPasswordError('');

    };
  
    
    
  
    
    
    const handleLogin=()=>{

        clearErrors();

        Fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err)=>{
            switch(err.code){
                case "auth/Invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
                default:
            }
        });

        

    };

const handleSignup=()=>{
    clearErrors();

    Fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err)=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
               
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
                default:

            }
        });
};

const handleLogout =()=>{
    Fire.auth().signOut();
};

const authListener =()=>{
    Fire.auth().onAuthStateChanged((user)=>{
        if(user){
            clearInputs();
            setUser(user);
            

        }else {
            setUser("");
        }

    });
};

useEffect(()=>{
    authListener(); // eslint-disable-next-line
},[]);

    return(

      

        <div className="Login">
            {user ? (
              
               
                  <Hero handleLogout={handleLogout}/>
        
               
               
                 

            ):(

             
            <Loginhtml
            email={email} 
            setEmail={setEmail} 
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            />
            
            )}
        </div>
     


    );
   
   
}

export default Login;