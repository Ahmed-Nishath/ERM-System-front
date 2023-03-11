import React, {useEffect, useState } from 'react';
import WorkOrderService from '../WorkOrderService';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import searchIcon from "./Icons/search.svg"

function Delivery() {

  const [workorders, setWorkorders] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [search, setSearch] = useState('');

  const updateWorkorder = (wo) => {
    return function(e){
        e.preventDefault(); 

        wo.status = "COMPLETED";

        WorkOrderService.updateWorkOrder(wo.id, wo).then(res => {
            getAllWorkOrder();
        }).catch(error => {
            console.log(error);
        });  
    };
}

  const getAllWorkOrder = () => {
    setIsPending(true)
    WorkOrderService.getWorkOrders().then((res) => {
      setWorkorders(res.data);
      setIsPending(false)
    }).catch(error => { 
      console.log(error);  
    });
  }

  useEffect(() => {
    getAllWorkOrder();
  }, []);

  return(
    <div>
      <span className="searchbar-content">
            <span className="search">
                <input id="search-input" type="text"  
                placeholder="Search Work Order"
                value={search}
                onChange = {(e) => setSearch(e.target.value)}/>
                <img id="magnifying-glass" src={searchIcon} alt="search" />
            </span>
        </span>

      <div className="header-tags">
        <div>WO number</div>
        <div>Product</div>
        <div>Action</div>
      </div>
      <div className="wo-list-container">
        {isPending && <div className='loading'>Loading...</div>}
        {
          workorders.filter((item) => {
            return search.toLowerCase() === '' ? item.status === "TO BE DELIVERED" :
             (item.status === "TO BE DELIVERED" && item.woNumber.toLowerCase().includes(search.toLowerCase()) || 
              item.status === "TO BE DELIVERED" && item.productName.toLowerCase().includes(search.toLowerCase())
             );
          }).map((wo) => {
            return ( 
                <div className="wo-previwe" id = "delivery-preview" key={wo.id} >
                    <Link id="wo-link" to={`/workorders/${wo.id}`}> 
                        <div> {wo.woNumber} </div>
                    </Link>
                  <div> {wo.productName} </div>
                  <div id = "delivery-complete-button">
                    <button onClick={updateWorkorder(wo)}>COMPLETE DELIVERY</button>  
                  </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}
export default withRouter(Delivery);