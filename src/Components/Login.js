const Login = () => {
    return ( 
        <div>
            <hr />
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
        </div>
     );
}
 
export default Login;