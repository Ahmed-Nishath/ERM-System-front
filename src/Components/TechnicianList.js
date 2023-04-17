import React, {useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import TechnicianService from "../TechnicianService";
import searchIcon from "./Icons/search.svg"
import CreateNew from "./CreateNew";

function TechnicianList() {

  const [technicians, setTechnicians] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [search, setSearch] = useState('');

  const getAllTechnicians = () => {
    setIsPending(true)
    TechnicianService.getTechnicians().then((res) => {
      setTechnicians(res.data);
      setIsPending(false)
    }).catch(error => { 
      console.log(error);  
    });
  }

  useEffect(() => {
    getAllTechnicians();
  }, []);

  return(
    <div>
      <span className="searchbar-content">
            <span className="search">
                <input id="search-input" type="text"  
                placeholder="Search Technician"
                value={search}
                onChange = {(e) => setSearch(e.target.value)}/>
                <img id="magnifying-glass" src={searchIcon} alt="search" />
            </span>
        </span>

      <Link to={'/create-technician'}>
        <CreateNew />
      </Link>

      <div className="header-tags" id="header-tags-technician">
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Feild</div>
      </div>
      <div className="wo-list-container" >
        {isPending && <div className='loading'>Loading...</div>}
        {
          technicians.filter((item) => {
            return search.toLowerCase() === '' ? item :
             (item.userName.toLowerCase().includes(search.toLowerCase()) || 
              item.nic.toLowerCase().includes(search.toLowerCase()));
          }).map((tech) => {
            return ( 
                <div className="wo-previwe" id='technician-previwe' key={tech.id}>
                  <div> {tech.userName} </div>
                  <div> {tech.email} </div>
                  <div> {tech.phone} </div>
                  <div> {tech.feild} </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}
export default withRouter(TechnicianList);