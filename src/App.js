import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useFetch from "./FunctionUseFetch";
import "./XStyles.css";

import DashboardAdmin from "./Components/DashboardAdmin";
import WorkOrderCreate from "./Components/WorkOrderCreate";
import WorkOrderList from "./Components/WorkOrderList";
import WorkOrderDetails from "./Components/WorkOrderDetails";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import UserView from "./Components/UserView";
import Login from "./Components/Login";
import SidePanel from "./Components/SidePanel";

function App() {
  //npx json-server --watch data/db.json --port 8000
  const { data, isPending, error } = useFetch("http://localhost:8000/workOrders");

  
  return (
    <div className="App">
      <Router>
        <div className="main-container">
          <div className="side-panel">
            <SidePanel />
          </div>
        
          <div className="content-container">
            <h1>BLACK EAGLE SERVICES</h1>
            <Switch>
              <Route exact path="/">
                <DashboardAdmin/>
              </Route>
              <Route exact path="/create">
                <WorkOrderCreate />
              </Route>

              <Route exact path="/workOrders">
                <div>
                  <Header user="Admin" page="Work Orders"/>
                  {error && <div id="error">{error}</div>}
                  {isPending && <div className="loading">Loading...</div>}
                  {data && <WorkOrderList workorders={data} />}
                </div>
              </Route>

              <Route exact path="/workorder/:id">
                  <Header user="Admin" page="Work Orders"/>
                  <WorkOrderDetails />
              </Route>
              
              <Route exact path="/technician">
                  <UserView />
              </Route>

              <Route exact path="/delivery">
                  <Login />
              </Route>

              <Route path="*">
                  <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router> 
    </div>
  );
}

export default App;
