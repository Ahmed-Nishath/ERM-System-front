import React, {useEffect, useState } from 'react';
import ProductService from '../ProductService';
import { withRouter } from "react-router-dom";
import searchIcon from "./Icons/search.svg"

function ProductList() {

  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [search, setSearch] = useState('');

  const getAllProducts = () => {
    setIsPending(true)
    ProductService.getProducts().then((res) => {
        setProducts(res.data);
        setIsPending(false)
    }).catch(error => { 
      console.log(error);  
    });
  }

  useEffect(() => {
    getAllProducts();
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
        <div>Serial Number</div>
        <div>Date of Sale</div>
        <div>Warrenty Status</div>
      </div>
      <div className="wo-list-container">
        {isPending && <div className='loading'>Loading...</div>}
        {
          products.filter((item) => {
            return search.toLowerCase() === '' ? item :
             (item.productName.toLowerCase().includes(search.toLowerCase()) || 
              item.serialNumber.toLowerCase().includes(search.toLowerCase()));
          }).map((prd) => {
            return ( 
                <div key={prd.serialNumber} className="list-previwe">
                  <div> {prd.productName} </div>
                  <div> {prd.serialNumber} </div>
                  <div> {prd.saleDate} </div>
                  <div> {prd.warrentyStatus} </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}
export default withRouter(ProductList);