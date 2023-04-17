import Popup from "./Popup";
import { useState } from "react";
import {withRouter } from "react-router-dom";
import TechnicianService from "../TechnicianService";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('no-error-class');

    const [error, setError] = useState('Both user name and password are required!.');

    const loginValidate = (e) =>{
        e.preventDefault(); 
        
        if(email=== '' || password === '') {
            setErrorMessage("error-class");
            return;
        }
        else{
            setErrorMessage('no-error-class'); 
        }

        let technician = {  
            email:email,
            password:password
        }
    
        TechnicianService.login(technician).then(res => {
            if(res.data.role === 'ADMIN')
            props.history.push("/admin-dashboard");

            else if (res.data.role === 'TECHNICIAN')
            props.history.push("/technician-dashboard");
        }).catch(error =>{
            setErrorMessage("error-class");
            setError("Incorrect credentials");
        });
    }

    return ( 
        <div id="main-login-container">
            <hr/>
            <div className="login-box">
                <form >
                    <div className="login-box-label">
                        <label>User name (Email)</label><br/>
                        <input type="text" required
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-box-label">
                        <label>Password</label><br/>  
                        <input type="password" required
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={loginValidate}>Login</button>
                </form>
            </div>   

            <div className={errorMessage}>
                {error}
            </div> 

            <Popup 
            message="Please contact the admin to reset the login 
                    credentials or get help with any login issues." 
            link="Forgot login credentials!." 
            linkClass="forgot-password"/>
        </div>
     );
}
 
export default withRouter(Login);