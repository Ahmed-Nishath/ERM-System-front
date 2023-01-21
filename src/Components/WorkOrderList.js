import React, {useEffect, useState } from 'react';
import WorkOrderService from '../WorkOrderService';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import CreateNew from "./CreateNew";

function WorkOrderList() {

  const [workorders, setWorkorders] = useState([]);

  const getAllWorkOrder = () => {
    WorkOrderService.getWorkOrders().then((res)=>{
      setWorkorders(res.data);
    }).catch(error => { 
      console.log(error);  
    });
  }

  useEffect(() => {
    getAllWorkOrder();
  }, []);

  return(
    <div>
      <SearchBar />

      <Link to={'/create-workorder'}>
        <CreateNew />
      </Link>

      <div className="header-tags">
        <div>WO number</div>
        <div>Product</div>
        <div>Customer</div>
        <div>Contact</div>
      </div>
      <div className="wo-list-container">
      {
        workorders.map((wo) => {
          return ( 
            <Link id="wo-link" to={`/workorders/${wo.id}`} key={wo.id}> 
              <div className="wo-previwe" >
                <div> {wo.productName} </div>
                <div> {wo.nic} </div>
                <div> {wo.cname} </div>
                <div> {wo.phone} </div>
              </div>
            </Link>
          );
        })
      }
      </div>
    </div>
  )
}
export default withRouter(WorkOrderList);