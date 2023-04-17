import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./XStyles.css";
import UserView from "./Components/UserView";

import Login from "./Components/Login";
import Main from "./Main";
import logoImg from "./Components/Icons/logo.svg";

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/estimation/:id">
                <UserView/>
            </Route>

            <Route exact path="/">
                <div style={{marginTop : '30px', marginLeft : '30px'}} className="company-name">
                  <img src={logoImg} alt="Logo" />
                  <h1>PRO-TECH SERVICES</h1>
                </div>
                <Login/>
            </Route>

            <Route exact path="*">
              <Main/>
            </Route>
          </Switch>
      </Router> 
    </div>
  );
}

export default App;
