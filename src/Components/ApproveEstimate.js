import React, {useEffect, useState } from 'react';
import WorkOrderService from '../WorkOrderService';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

import searchIcon from "./Icons/search.svg"

function ApproveEstimate() {

  const [workorders, setWorkorders] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [search, setSearch] = useState('');

  const updateWorkorder = (wo, status) => {
    return function(e){
        e.preventDefault(); 

        wo.status = status;

        if(status ==="PENDING CUSTOMER APPROVAL" ){
          sendEmail(wo);
        }

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

  const sendEmail = (wo) => {
    var templateParams = {
      user_email: wo.email,
      to_name: wo.cname, 
      message: 'http://localhost:3000/estimation/'+ wo.woNumber
    };

      emailjs.send('service_rusnfka', 'template_h9iaxum', templateParams, 'Wd7oGbO9z66LQ5FI4')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  };

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
        <div>Estimated Cost</div>
        <div></div>
        <div></div>
      </div>
      <div className="wo-list-container">
        {isPending && <div className='loading'>Loading...</div>}
        {
          workorders.filter((item) => {
            return search.toLowerCase() === '' ? item.status === "PENDING ADMIN APPROVAL" :
             (item.status === "PENDING ADMIN APPROVAL" && item.woNumber.toLowerCase().includes(search.toLowerCase()));
          }).map((wo) => {
            return ( 
                <div className="wo-previwe" id = "delivery-preview" key={wo.id} >
                    <Link id="wo-link" to={`/workorders/${wo.id}`}> 
                        <div> {wo.woNumber} </div>
                    </Link>
                  <div> {wo.cost} </div>
                  <div id = "estimate-approve-button">
                    <button onClick={updateWorkorder(wo, "PENDING CUSTOMER APPROVAL")}>APPROVE</button>  
                  </div>
                  <div id = "estimate-reject-button">
                    <button onClick={updateWorkorder(wo, "ESTIIMATE REJECTED")}>REJECT</button> 
                  </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}
export default withRouter(ApproveEstimate);