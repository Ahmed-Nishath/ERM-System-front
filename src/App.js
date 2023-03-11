import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./XStyles.css";
import UserView from "./Components/UserView";

import Main from "./Main";

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/estimation/:id">
                <UserView/>
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
