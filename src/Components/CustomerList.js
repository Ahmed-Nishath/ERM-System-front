import React, {useEffect, useState } from 'react';
import CustomerService from '../CustomerService';
import { withRouter } from "react-router-dom";
import searchIcon from "./Icons/search.svg"

function CustomerList() {

  const [customers, setCustomers] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [search, setSearch] = useState('');

  const getAllCustomers = () => {
    setIsPending(true)
    CustomerService.getCustomers().then((res) => {
        setCustomers(res.data);
        setIsPending(false)
    }).catch(error => { 
      console.log(error);  
    });
  }

  useEffect(() => {
    getAllCustomers();
  }, []);

  return(
    <div>
      <span className="searchbar-content">
            <span className="search">
                <input id="search-input" type="text"  
                placeholder="Search Customer"
                value={search}
                onChange = {(e) => setSearch(e.target.value)}/>
                <img id="magnifying-glass" src={searchIcon} alt="search" />
            </span>
        </span>

      <div className="header-tags">
        <div>Name</div>
        <div>NIC</div>
        <div>Phone</div>
        <div>Email</div>
      </div>
      <div className="wo-list-container">
        {isPending && <div className='loading'>Loading...</div>}
        {
          customers.filter((item) => {
            return search.toLowerCase() === '' ? item :
             (item.cname.toLowerCase().includes(search.toLowerCase()) || 
              item.nic.toLowerCase().includes(search.toLowerCase()));
          }).map((cust) => {
            return ( 
                <div className="list-previwe" key={cust.id}>
                  <div> {cust.cname} </div>
                  <div> {cust.nic} </div>
                  <div> {cust.phone} </div>
                  <div> {cust.email} </div>
                </div>
            );
          }) 
        }
      </div>
    </div>
  )
}
export default withRouter(CustomerList);