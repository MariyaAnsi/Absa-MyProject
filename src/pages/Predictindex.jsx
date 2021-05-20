import React from 'react'



const Predictindex =()=>{
    return(
        <div className="Predictindex">
            <div class="form">
                <form action="http://localhost:5000/predict" method="get">
                    Data: <input type="text" name="data"/>
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>

        </div>

    );
}

export default Predictindex;