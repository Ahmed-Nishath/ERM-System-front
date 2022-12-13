import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import useFetch from "./useFetch";
import "./App.css";
import Header from "./header";
import SearchBar from "./search";
import CreateWorkOrder from "./CreateWorkOrder";
import WorkOrderList from "./WorkOrderList";
import WorkOrderDetails from "./WorkOrderDetails";
import NotFound from "./NotFound";


function App() {
  const { data, isPending, error } = useFetch("http://localhost:8000/workOrders");

  return (
      <Router>
        <div className="App">
        <h1>ERM-System</h1>
          <Header user="Admin" page="Work Orders"/>

          <Switch>
            <Route exact path="/">
              <SearchBar />
              <span className="buttons">
                <Link to="/create"><button id="create">Create Work Order</button></Link>
              </span>
              <div className="content">
                {error && <div id="error">{error}</div>}
                {isPending && <div id="loading">Loading...</div>}
                {data && <WorkOrderList workorders={data} />}
              </div>
              </Route>

              <Route exact path="/create">
                <CreateWorkOrder />
              </Route>
              
              <Route exact path="/workorder/:id">
                <WorkOrderDetails />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>


        </div>
      </Router>
  );
}

export default App;
