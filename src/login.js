const Login = () => {
    return ( 
        <div className="login-page">
            <h1>ERM SYSTEM</h1>
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