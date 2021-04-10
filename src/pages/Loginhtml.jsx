import React from 'react';
import './Login.css';

const Loginhtml=(props)=>{

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSignup,
        handleLogin,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError}=props;
    return(
        <section className="login"> 
            <div className="loginContainer">
                
                <label>Email</label>
                <input 
                type="email"
                autoFocus
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}

                />
                <p className="errorMsg">{emailError}</p>
                
                <label>Password</label>
                <input
                type="password"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                
                />
                <p className="errorMsg">{passwordError}</p>
                 
                <div className="btnContainer">
                   {hasAccount ?(
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Dont't have an account ?<span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>

                   ) :(
                    <>
                    
                    <button onClick={handleSignup}>Sign up</button>
                    <p>have an account ?<span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>


                   )}

                </div>



            </div>
        </section>

    )
}

export default Loginhtml;