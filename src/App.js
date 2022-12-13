import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import useFetch from "./useFetch";
import "./App.css";
import Header from "./header";
import SearchBar from "./search";
import CreateWorkOrder from "./CreateWorkOrder";
import WorkOrderList from "./WorkOrderList";
import WorkOrderDetails from "./WorkOrderDetails";
import NotFound from "./NotFound";
import add from "./add.svg"

import UserView from "./UserView";
import AdminDashboard from "./AdminDashboard";



function App() {
  //npx json-server --watch data/db.json --port 8000
  const { data, isPending, error } = useFetch("http://localhost:8000/workOrders");

  return (
      // <Router>
      //   <div className="App">
      //   <h1>ERM-System</h1>

      //     <Header user="Admin" page="Work Orders"/>

      //     <Switch>
      //       <Route exact path="/">
      //         <SearchBar />
      //         <Link to="/create">
      //           <span className="buttons">
      //             <img src={add} alt="Add new" />
      //             <div>Create</div>
      //           </span>
      //         </Link>
      //         <div className="content">
      //           {error && <div id="error">{error}</div>}
      //           {isPending && <div id="loading">Loading...</div>}
      //           {data && <WorkOrderList workorders={data} />}
      //         </div>
      //         </Route>

      //         <Route exact path="/create">
      //           <CreateWorkOrder />
      //         </Route>
              
      //         <Route exact path="/workorder/:id">
      //           <WorkOrderDetails />
      //         </Route>

      //         <Route path="*">
      //           <NotFound />
      //         </Route>
      //       </Switch>
      //   </div>
      // </Router>


      <div id="temp">
        <h1>ERM-System</h1>
          <AdminDashboard />

      </div>
  );
}

export default App;
