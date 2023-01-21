import { withRouter } from "react-router-dom";
import { useState } from "react";
import CustomerService from "../CustomerService";

const CreateCustomer = (props) => {

    const [cname, setName] = useState('');
    const [nic, setNIC] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const saveCustomer = (e) =>{
        e.preventDefault(); 
        
        if(cname === '' || nic=== '' || 
           phone === '' || address === '' || 
           email === ''){
            setErrorMessage("Please fill all the feilds");
            return;
        }
        else{
            setErrorMessage(''); 
        }

        let customer = {cname:cname, 
                        nic:nic,
                        phone:phone,
                        address:address,
                        email:email}
        
        // console.log('Customers => ' + JSON.stringify(customer));
        
        CustomerService.createCustomer(customer).then(res =>{
            props.history.push("/customers");
        }).catch(error =>{
            console.log(error);
        });
    }

    const cancel = () =>{
        props.history.push("/customers");
    } 

    return ( 
        <div>
            <form id="create-workorder-form" >
                <h2>Create New Work Order</h2>
                <div className="create-form">
                    <div className="form-user-info">
                        <h4>User Information</h4>
                        <label>Customer Name: </label><br/>
                        <input type="text" required 
                            value={cname}
                            onChange = {(e) => setName(e.target.value)}
                        /><br/>

                        <label>NIC Number: </label><br/>
                        <input type="text" required
                            value={nic}
                            onChange = {(e) => setNIC(e.target.value)}
                        /><br/>

                        <label>Address: </label><br/>
                        <input type="text" required
                            value={address}
                            onChange = {(e) => setAddress(e.target.value)}
                        /><br/>
                        
                        <label>Contact number: </label><br/>
                        <input type="text" required
                            value={phone}
                            onChange = {(e) => setContact(e.target.value)}
                        /><br/>

                        <label>Email: </label><br/>
                        <input type="text" required
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        /><br/>
                    </div>
                </div>   
                <div className="errorMessage">
                    {errorMessage}
                </div>  
                <button onClick={saveCustomer} className="create-wo-form-button">Create</button>
                <button className="create-wo-form-button" onClick={cancel} >Cancel</button>
            </form>
        </div>    
     );
}
 
export default withRouter(CreateCustomer)


// import React, {Component} from "react";
// import { withRouter } from "react-router-dom";
// import CustomerService from "../CustomerService";


// class CreateCustomer extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             cname: '',
//             nic: '',
//             address:'',
//             phone:'',
//             email:''
//         }

//         this.changeNameHandler = this.changeNameHandler.bind(this);
//         this.changeNicHandler = this.changeNicHandler.bind(this);
//         this.changeAddressHandler = this.changeAddressHandler.bind(this);
//         this.changePhoneHandler = this.changePhoneHandler.bind(this);
//         this.changeEmailHandler = this.changeEmailHandler.bind(this);
//         this.saveCustomer = this.saveCustomer.bind(this);
//         this.cancel=this.cancel.bind(this);
//     }

//     changeNameHandler = (e) =>{
//         this.setState({cname:e.target.value})
//     } 
//     changeNicHandler = (e) =>{
//         this.setState({nic:e.target.value})
//     } 
//     changeAddressHandler = (e) =>{
//         this.setState({address:e.target.value})
//     } 
//     changePhoneHandler = (e) =>{
//         this.setState({phone:e.target.value})
//     } 
//     changeEmailHandler = (e) =>{
//         this.setState({email:e.target.value})
//     } 

//     cancel(){
//         this.props.history.push("/customers");
//     } 
    
//     saveCustomer = (e) =>{
//         e.preventDefault(); 
        
//         if(this.state.cname === '' || this.state.nic=== '' || 
//            this.state.phone === '' || this.state.address === '' || 
//            this.state.email === ''){
//             return;
//         }

//         let customer = {cname:this.state.cname, 
//                         nic:this.state.nic,
//                         phone:this.state.phone,
//                         address:this.state.address,
//                         email:this.state.email}
        
//         // console.log('Customers => ' + JSON.stringify(customer));

//         CustomerService.createCustomer(customer).then(res =>{
//             this.props.history.push("/customers");
//         });
//     }

    // render(){
    //     return(
    //         <div>
    //             <form id="create-workorder-form" >
    //                 <h2>Create New Work Order</h2>
    //                 <div className="create-form">
    //                     <div className="form-user-info">
    //                         <h4>User Information</h4>
    //                         <label>Customer Name: </label><br/>
    //                         <input id="name-input" type="text" required
    //                             value={this.state.cname} onChange = {this.changeNameHandler}
    //                         /><br/>

    //                         <label>NIC Number: </label><br/>
    //                         <input type="text" required
    //                             value={this.state.nic} onChange = {this.changeNicHandler}
    //                         /><br/>

    //                         <label>Address: </label><br/>
    //                         <input type="text" required
    //                             value={this.state.address} onChange = {this.changeAddressHandler}
    //                         /><br/>
                            
    //                         <label>Contact number: </label><br/>
    //                         <input type="text" required 
    //                             value={this.state.phone} onChange = {this.changePhoneHandler}
    //                         /><br/>

    //                         <label>Email: </label><br/>
    //                         <input type="text" required 
    //                             value={this.state.email} onChange = {this.changeEmailHandler}
    //                         /><br/>
    //                     </div>
    //                     {/* <div className="form-product-info">
    //                         <h4>Product Information</h4>
    //                         <label>Product name: </label><br/>
    //                         <input type="text" required
    //                             value={productName}
    //                             onChange = {(e) => setProductName(e.target.value)}
    //                         /><br/>
                            
    //                         <label>Serial Number: </label><br/>
    //                         <input type="text" required
    //                             value={serialNumber}
    //                             onChange = {(e) => setSerialNumber(e.target.value)}
    //                         /><br/>
                            
    //                         <label>Date of sale: </label><br/>
    //                         <input type="text" required
    //                             value={saleDate}
    //                             onChange = {(e) => setSaleDate(e.target.value)}
    //                         /><br/>

    //                         <label>Warrenty Status</label><br/>
    //                         <select required
    //                             value={warrentyStatus}
    //                             onChange = {(e) => setWarrentyStatus(e.target.value)}>
                                    
    //                             <option value="UNDER WARRENTY">UNDER WARRENTY</option>
    //                             <option value="OVER WARRENTY">OVER WARRENTY</option>
    //                         </select>
    //                     </div> */}
    //                     </div> 
    //                     <button className="create-wo-form-button" onClick={this.cancel} >Cancel</button>
    //                     <button className="create-wo-form-button" onClick={this.saveCustomer}>Create</button>
    //                 </form>
    //             </div>
    //         )
    //     }
    // }
    // export default withRouter(CreateCustomer)
