import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useFetch from "./useFetch";
import "./App.css";

import AdminDashboard from "./AdminDashboard";
import CreateWorkOrder from "./CreateWorkOrder";
import WorkOrderList from "./WorkOrderList";
import WorkOrderDetails from "./WorkOrderDetails";
import NotFound from "./NotFound";
import Header from "./header";

function App() {
  //npx json-server --watch data/db.json --port 8000
  const { data, isPending, error } = useFetch("http://localhost:8000/workOrders");

  return (
    <div className="App">
      <Router>
        <div className="main-container">
          <div className="side-panel">
        
          </div>
        
          <div className="content-container">
            <h1>BLACK EAGLE SERVICES</h1>
            <Switch>
              <Route exact path="/">
                <AdminDashboard/>
              </Route>
              <Route exact path="/create">
                <CreateWorkOrder />
              </Route>

              <Route exact path="/workOrders">
                <div>
                  <Header user="Admin" page="Work Orders"/>
                  {error && <div id="error">{error}</div>}
                  {isPending && <div id="loading">Loading...</div>}
                  {data && <WorkOrderList workorders={data} />}
                </div>
              </Route>

              <Route exact path="/workorder/:id">
                  <Header user="Admin" page="Work Orders"/>
                  <WorkOrderDetails />
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
