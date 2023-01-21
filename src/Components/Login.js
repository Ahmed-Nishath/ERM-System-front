import Popup from "./Popup";

const Login = () => {
    return ( 
        <div id="main-login-container">
            <hr/>
            <div className="login-box">
                <form >
                    <div className="login-box-label">
                        <label>User name</label><br/>
                        <input type="text" required/>
                    </div>

                    <div className="login-box-label">
                        <label>Password</label><br/>  
                        <input type="password" required/>
                    </div>
                    <button>Login</button>
                </form>
            </div>   
            <Popup 
            message="Please contact the admin to reset the login 
                    credentials or get help with any login issues." 
            link="Forgot login credentials!." 
            linkClass="forgot-password"/>
        </div>
     );
}
 
export default Login;