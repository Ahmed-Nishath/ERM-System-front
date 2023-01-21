import React, {useEffect, useState } from 'react';
import CustomerService from '../CustomerService';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function CustomerList() {

  const [customers, setCustomers] = useState([]);

  const getAllCustomers = () => {
    CustomerService.getCustomers().then((res)=>{
      setCustomers(res.data);
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    getAllCustomers();
  }, []);

  const deleteCustomer = (id) => {
    CustomerService.deleteCustomer(id).then((res)=>{
      getAllCustomers();
    }).catch((error) => {
      console.log(error);
    })
  }

  return(
    <div>
      {/* <SearchBar /> */}
      <div className="header-tags">
        <div>NIC</div>
        <div>Contact</div>
        <div>Email</div>
        <div>Address</div>
      </div>
      <div className="wo-list-container">
      {
        customers.map((cus) => {
          return ( 
            // <Link id="wo-link" to={`/workorder/${cus.id}`}> 
              <div className="wo-previwe" key={cus.id}>
                <div> {cus.nic} </div>
                <div> {cus.phone} </div>
                <div> {cus.email} </div>
                <div> {cus.address} </div>
                <Link to={`/update-customer/${cus.id}`}>Update</Link>
                <div><button onClick={() => deleteCustomer(cus.id)}> Delete </button></div>
              </div>
            // </Link>
          );
        })
      }
      </div>
    </div>
  )
}
export default withRouter(CustomerList);




// import React, {Component } from 'react';
// import CustomerService from '../CustomerService';
// import { withRouter } from "react-router-dom";

// class CustomerList extends Component{

//   constructor(props){
//     super(props);

//     this.state={
//       workorders: []
//     }

//     this.editCustomer = this.editCustomer.bind(this);
//   }

//   componentDidMount(){
//     CustomerService.getCustomers().then((res)=>{
//         this.setState({workorders:res.data});
//     });
//   }

//   editCustomer = (id) =>{
//     this.props.history.push(`/update/${id}`);
//   }

//   render(){
//     return(
//       <div>
//         {/* <SearchBar /> */}

//         <div className="header-tags">
//           <div>WO number</div>
//           <div>Product</div>
//           <div>Customer</div>
//           <div>Contact</div>
//         </div>
//         <div className="wo-list-container">
//         {
//           this.state.workorders.map((wo) => {
//             return ( 
//               // <Link id="wo-link" to={`/workorder/${wo.id}`}> 
//                 <div className="wo-previwe" key={wo.id}>
//                   <div> {wo.nic} </div>
//                   <div> {wo.phone} </div>
//                   <div> {wo.email} </div>
//                   <div> {wo.address} </div>
//                   <div> <button onClick={() => this.editCustomer(wo.id)}>Edit </button> </div>
//                 </div>
//               // </Link>
//             );
//           })
//         }
//         </div>
//       </div>
//     )
//   }
// }
// export default withRouter(CustomerList);
