import React,{useState,useEffect} from 'react'
//import {Form,Input} from 'semantic-ui-react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Predictindex.css';


const Predictindex =()=>{

const [Data,setData]=useState('');
const [Output,setOutput]=useState('');


useEffect(()=>{
  fetch('http://localhost:5000/predict').then (response=>
  response.json().then(data=>{
    setOutput(data.output)
  })

  );
},[])








console.log(Output)

    return(
        <div className="Predictindex">
          <div className="Card">
        
            <div className="d-flex justify-content-center" style={{  gap: '12px',  position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'}}>
              <Card className ="card1" style={{ width: '28rem',height:'20rem'}}>
             <Card.Body>
              <Card.Title style={{justifyContent:'center'}}>Online Prediction</Card.Title>
          
               <div class="form">
               <form>
              
	             <input type="text"
		                  class="input_text"
 	                  	placeholder="Enter Text"
		                  value={Data}
                      onChange={e => setData(e.target.value)}
                      
                      
                      /><button type="submit"
		                   value="Predict"
                       class="btn1"
                       style={{varient:'primary'}}
		                   onClick={async ()=>{
                      const datavalue={Data};
                      const response = await fetch("http://localhost:5000/predict",{
                       
                        method:"POST",
                        headers:{
                          "Content-Type":"application/json"
                        },
                        body: JSON.stringify(datavalue)
                      })
                    if(response.ok){
                      console.log("Response worked");
                      console.log(response);
                      console.log(datavalue)
                    }
                    else{
                      console.log("Response not working ");
                      console.log(response)
                    }
                    }}>PREDICT</button>
                     <p style={{marginTop:'10%'}} value=''>The Aspect and Polarity should be:<b>{Output}</b></p>


                  </form>
             
              
                </div>
                </Card.Body>
                </Card>
                <Card className ="card2" style={{ width: '28rem',height:'20rem'}}>

                </Card>
                
                
            </div>
            </div>
          
        </div>

    );
}

export default Predictindex;