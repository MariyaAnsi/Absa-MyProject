import React, { useContext ,useState} from "react";
import { Redirect,Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "/home/mariya/vscodeproj/absa/src/common/Fire.jsx";
import MultiSelect from "react-multi-select-component";
//import Select from 'react-select';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';





const Dashboard = () => {
 

  var Options=[
    {
      value:1,
      label:'Samsung'
    },
    {
      value:2,
      label:"Xoami"
    },
   
    
  ];



 const[selected,setSelected]=useState([]);




  
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }else{
  return (
    <div className="Dashboard">
      <div className="DashboardContainer">
    
      <div className="d-flex justify-content-center" style={{  gap: '12px',  position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'}}>
      <Card className ="card1" style={{ width: '18rem'}}>
        <Card.Body>
           <Card.Title style={{justifyContent:'center'}}>Brand Comparison</Card.Title>
           <div className="select_dropdown">
           <MultiSelect
            options={Options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select Brand"
            />
           
            
            

                       

           </div>
          

          <Link to={{pathname:'/analytics', aboutProps:{name:selected}}}><Button  variant="primary" style={{width:'10rem'}}>View Analytics</Button></Link>
         </Card.Body>
      </Card>
      <Card className ="card2" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Model Prediction</Card.Title>
         <Link to='/predictindex'><Button variant="primary" style={{width:'10rem'}}>Start</Button></Link>
       </Card.Body>
      </Card>
      <Card className ="card3" style={{ width: '18rem' }}>
         <Card.Body>
         <Button variant="primary" onClick={() => firebaseConfig.auth().signOut()} style={{justifyContent:'center'}}>Sign Out</Button>
          </Card.Body>
      </Card>
      
     
      </div>
      </div>
 
    </div>
  )}
};

export default Dashboard;

 
