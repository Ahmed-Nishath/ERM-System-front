import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./XStyles.css";
import logoImg from "./Components/Icons/logo.svg";

import DashboardAdmin from "./Components/DashboardAdmin";
import WorkOrderCreate from "./Components/WorkOrderCreate";
import WorkOrderList from "./Components/WorkOrderList";
import WorkOrderDetails from "./Components/WorkOrderDetails";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import UserView from "./Components/UserView";
import SidePanel from "./Components/SidePanel";
import WorkOrderUpdate from "./Components/WorkOrderUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-container">
          <div className="side-panel">
            <SidePanel /*cls={el}*//>
          </div>
        
          <div className="content-container">
            <div className="company-name">
              <img src={logoImg} alt="Logo" />
              <h1>PRO-TECH SERVICES</h1>
            </div>

            <Switch>
              <Route exact path="/">
                <DashboardAdmin/>
              </Route>

              <Route exact path="/workorders">
                <div>
                  <Header user="Admin" page="Work Orders"/>
                  
                  <WorkOrderList />
                </div>
              </Route> 

              <Route exact path="/workorders/:id">
                  <Header user="Admin" page="Work Orders"/>
                  <WorkOrderDetails />
              </Route>
              
              <Route exact path="/user-view">
                  <UserView />
              </Route>

              <Route exact path="/create-workorder">
                  <WorkOrderCreate/> 
              </Route>

              <Route exact path="/update-workorder/:id">
                  <WorkOrderUpdate/>
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
