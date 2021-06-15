import React,{Fragment} from 'react';
import Auth from './Auth';
import "./Login.css"

export const Login = props => {
    return (
        <Fragment>
            <form className="box"  method="post">
            <h1>Login</h1>
            <input type="text" name="" placeholder="Username"/>
            <input type="password" name="" placeholder="Password"/>
            <input type="submit" name="" value="Login" onClick={()=>{
                Auth.login(()=>{
                    props.history.push("/app");
                })
            }}/>
            <h5>No tienes cuenta? </h5>
            <input type="submit" name="" value="Registration" onClick={()=>{
          
                    props.history.push("/regis");
        
            }}/>
            </form>
        </Fragment>

       
    );

}
   

 


  
export default Login;