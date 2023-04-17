import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./XStyles.css";
import logoImg from "./Components/Icons/logo.svg";

import DashboardAdmin from "./Components/DashboardAdmin";
import WorkOrderCreate from "./Components/WorkOrderCreate";
import WorkOrderList from "./Components/WorkOrderList";
import WorkOrderDetails from "./Components/WorkOrderDetails";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import SidePanel from "./Components/SidePanel";
import WorkOrderUpdate from "./Components/WorkOrderUpdate";
import TechnicianCreate from "./Components/TechnicianCreate";
import WorkOrderTransfer from "./Components/WorkOrderTransfer";
import Comment from "./Components/Comment";
import TechnicianList from "./Components/TechnicianList";
import CustomerList from "./Components/CustomerList";
import ProductList from "./Components/ProductList";
import Delivery from "./Components/Delivery";
import WorkOrderComplete from "./Components/WorkOrderComplete";
import PaymentUpdate from "./Components/PaymentUpdate";
import ApproveEstimate from "./Components/ApproveEstimate";
import UpdateEstimate from "./Components/UpdateEstimate";

import DashboardTechnician from "./Components/DashboardTechnician";
import WorkOrderListTechnician from "./Components/WorkOrderListTechnician";
import WorkOrderDetailsTechnician from "./Components/WorkOrderDetailsTechnician";

function Main() {

  return (
    <div className="App">
      <Router>
        <div className="main-container">

          <div className="side-panel">
            <SidePanel/>
          </div>
        
          <div className="content-container">
            <div className="company-name">
              <img src={logoImg} alt="Logo" />
              <h1>PRO-TECH SERVICES</h1>
            </div>

            <Switch>

              <Route exact path="/workorders">
                <div>
                  <Header user="" page="Work Orders"/>
                  <WorkOrderList />
                </div>
              </Route> 

              <Route exact path="/workorders/:id">
                  <Header user="" page="Work Orders"/>
                  <WorkOrderDetails />
              </Route>

              <Route exact path="/create-workorder">
                  <WorkOrderCreate/> 
              </Route>

              <Route exact path="/update-workorder/:id">
                  <WorkOrderUpdate/>
              </Route>

              <Route exact path="/transfer-workorder">
                  <WorkOrderTransfer/>
              </Route>

              <Route exact path="/customers">
                  <div>
                  <Header user="" page="Customers"/>
                  <CustomerList/>
                </div>
              </Route>

              <Route exact path="/products">
                  <div>
                  <Header user="" page="Products"/>
                  <ProductList/>
                </div>
              </Route>

              <Route exact path="/technicians">
                <div>
                  <Header user="Admin" page="Technicians"/>
                  <TechnicianList/>
                </div>
              </Route>
              
              <Route exact path="/create-technician">
                  <TechnicianCreate/>
              </Route>

              <Route exact path="/comment/:id">
                  <Comment/>
              </Route>

              <Route exact path="/delivery">
                <div>
                  <Header user="Admin" page="Delivery"/>
                  <Delivery/>
                </div>
              </Route>

              <Route exact path="/complete">
                <div>
                  <Header user="Technician" page="Finish WorkOrder"/>
                  <WorkOrderComplete/>
                </div>
              </Route>

              <Route exact path="/payment">
                <div>
                  <Header user="Admin" page="Update Payment"/>
                  <PaymentUpdate/>
                </div>
              </Route>

              <Route exact path="/estimate-approve">
                <div>
                  <Header user="Admin" page="Approve Estimate"/>
                  <ApproveEstimate/>
                </div>
              </Route>

              <Route exact path="/estimate-update">
                  <UpdateEstimate/>
              </Route>

              <Route exact path="/admin-dashboard">
                  <DashboardAdmin/>
              </Route>

              <Route exact path="/technician-dashboard">
                  <DashboardTechnician/>
              </Route>

              <Route exact path="/workorders-technician">
                  <WorkOrderListTechnician/>
              </Route>

              <Route exact path="/workorders-technician/:id">
                  <Header user="Technician" page="Work Orders"/>
                  <WorkOrderDetailsTechnician />
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

export default Main;
