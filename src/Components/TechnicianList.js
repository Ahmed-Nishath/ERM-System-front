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

      <div className="header-tags">
        <div>Name</div>
        <div>NIC</div>
        <div>Phone</div>
        <div>Feild</div>
      </div>
      <div className="wo-list-container">
        {isPending && <div className='loading'>Loading...</div>}
        {
          technicians.filter((item) => {
            return search.toLowerCase() === '' ? item :
             (item.tname.toLowerCase().includes(search.toLowerCase()) || 
              item.nic.toLowerCase().includes(search.toLowerCase()));
          }).map((tech) => {
            return ( 
              <Link id="wo-link" to={`/technicians/${tech.id}`} key={tech.id}> 
                <div className="wo-previwe" >
                  <div> {tech.tname} </div>
                  <div> {tech.nic} </div>
                  <div> {tech.phone} </div>
                  <div> {tech.feild} </div>
                </div>
              </Link>
            );
          })
        }
      </div>
    </div>
  )
}
export default withRouter(TechnicianList);