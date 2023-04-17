import React, {useEffect, useState } from 'react';
import WorkOrderService from '../WorkOrderService';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import searchIcon from "./Icons/search.svg"

function WorkOrderListTechnician() {

  const [workorders, setWorkorders] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [search, setSearch] = useState('');

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
                <input id="search-input-technician" type="text"  
                placeholder="Search Work Order"
                value={search}
                onChange = {(e) => setSearch(e.target.value)}/>
                <img id="magnifying-glass" src={searchIcon} alt="search" />
            </span>
        </span>

      <div className="header-tags">
        <div>WO number</div>
        <div>Product</div>
        <div>Customer</div>
        <div>Contact</div>
      </div>
      <div className="wo-list-container">
        {isPending && <div className='loading'>Loading...</div>}
        {
          workorders.filter((item) => {
            return search.toLowerCase() === '' ? item :
             (item.woNumber.toLowerCase().includes(search.toLowerCase()) || 
              item.productName.toLowerCase().includes(search.toLowerCase()));
          }).map((wo) => {
            return ( 
              <Link id="wo-link" to={`/workorders-technician/${wo.id}`} key={wo.id}> 
                <div className="wo-previwe" >
                  <div> {wo.woNumber} </div>
                  <div> {wo.productName} </div>
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
export default withRouter(WorkOrderListTechnician);