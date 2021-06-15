import React,{Fragment, useState} from 'react';
import Auth from './Auth';
import "./Login.css"

export const Registration = props => {
    const [username, setUsername] = useState([]);
    const [pw, setPw] = useState([]);
    const [pwc, setPwc] = useState([]);
    return (
        <Fragment>
            <form className="box"  method="post">
            <h1>Registration</h1>
            <input type="text" name="" placeholder="Username" 
            onChange={(e)=>{setUsername(e.target.value)}}/>

            <input type="password" name="" placeholder="Password"
            onChange={(e)=>{setPw(e.target.value)}}/>

            <input type="password" name="" placeholder="Confirm Password"
            onChange={(e)=>{setPwc(e.target.value)}}/>
            
            <input type="submit" name="" value="Register" onClick={()=>{
                Auth.login(()=>{
                    props.history.push("/app");
                })
            }}/>    
            <label>Tienes cuenta? </label>
            <input type="submit" name="" value="Login" onClick={()=>{
          
                    props.history.push("/");
        
            }}/>

            </form>
        </Fragment>

       
    );

}
   

 


  
export default Registration;