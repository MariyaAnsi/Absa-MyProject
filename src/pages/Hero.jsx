import React from 'react';



const Hero=({handleLogout})=>{
    return(
        <div className="hero">
            

            {/* <div className="card">
                <h1>testcheck</h1>

            </div> */}
            <h1>testcheck</h1>
           
           <div className="logout">
                
                <button onClick={handleLogout}>Logout</button>
           
        </div>
        </div>
    )
}

export default Hero;