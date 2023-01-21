import { useState } from "react";
import {withRouter } from "react-router-dom";
import WorkOrderService from "../WorkOrderService";

const CreateWorkOrder = (props) => {
    const rand = Math.floor(1000 + Math.random() * 9000);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');
    var mm = String(today.getMonth()+1).padStart(2,'0'); //Januaru=0
    var yyyy = String(today.getFullYear()).padStart(2,'0');
    const WOnumber = "WO"+yyyy+mm+dd+""+rand;

    const [cname, setName] = useState('');
    const [nic, setNIC] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [productName, setProductName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [saleDate, setSaleDate] = useState('');
    const [warrentyStatus, setWarrentyStatus] = useState('UNDER WARRENTY');
    const [errorMessage, setErrorMessage] = useState('');
    
    const saveWorkorder = (e) =>{
        e.preventDefault(); 
        
        if(cname === '' || nic=== '' || 
           phone === '' || address === '' || 
           email === '' || productName === ''||
           serialNumber === '' || saleDate === ''){
            setErrorMessage("Please fill all the feilds");
            return;
        }
        else{
            setErrorMessage(''); 
        }

        let workorder = {woNumber:WOnumber,
                        productName:productName,
                        serialNumber:serialNumber,
                        saleDate:saleDate,
                        warrentyStatus:warrentyStatus,
                        nic:nic,
                        cname:cname, 
                        address:address,
                        email:email,
                        phone:phone,
                        }
        
        WorkOrderService.createWorkOrder(workorder).then(res =>{
            props.history.push("/workorders");
        }).catch(error =>{
            console.log(error);
        });
    }

    const cancel = () =>{
        props.history.push("/workorders");
    } 
    
    return ( 
        <div>
            <form id="create-workorder-form">
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
                    <div className="form-product-info">
                        <h4>Product Information</h4>
                        <label>Product name: </label><br/>
                        <input type="text" required
                            value={productName}
                            onChange = {(e) => setProductName(e.target.value)}
                        /><br/>
                        
                        <label>Serial Number: </label><br/>
                        <input type="text" required
                            value={serialNumber}
                            onChange = {(e) => setSerialNumber(e.target.value)}
                        /><br/>
                        
                        <label>Date of sale: </label><br/>
                        <input type="text" required
                            value={saleDate}
                            onChange = {(e) => setSaleDate(e.target.value)}
                        /><br/>

                        <label>Warrenty Status</label><br/>
                        <select required
                            value={warrentyStatus}
                            onChange = {(e) => setWarrentyStatus(e.target.value)}>
                                
                            <option value="UNDER WARRENTY">UNDER WARRENTY</option>
                            <option value="OVER WARRENTY">OVER WARRENTY</option>
                        </select>
                    </div>
                </div>    
                <div className="errorMessage">
                    {errorMessage}
                </div>  
                <div id="form-buttons">
                    <button onClick={saveWorkorder} className="create-wo-form-button">Create</button>
                    <button className="create-wo-form-button" onClick={cancel} >Cancel</button>
                </div>
            </form>
        </div>    
     );
}
 
export default withRouter(CreateWorkOrder);