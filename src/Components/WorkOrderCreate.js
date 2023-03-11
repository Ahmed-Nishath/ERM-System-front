import { useState } from "react";
import {withRouter } from "react-router-dom";
import WorkOrderService from "../WorkOrderService";

const CreateWorkOrder = (props) => {
    const rand = Math.floor(1000 + Math.random() * 9000);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');
    var mm = String(today.getMonth()+1).padStart(2,'0'); //January = 0
    var yyyy = String(today.getFullYear()).padStart(2,'0');
    const WOnumber = "WO"+yyyy+mm+dd+""+rand;

    const [cname, setName] = useState('');
    const [nic, setNIC] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [productName, setProductName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [saleDate, setSaleDate] = useState(new Date());
    const [assignTo, setAssignTo] = useState('- Choose technician -');
    const [warrentyStatus, setWarrentyStatus] = useState('UNDER WARRENTY');
    const [errorMessage, setErrorMessage] = useState('no-error-class');
    
    const saveWorkorder = (e) =>{
        e.preventDefault(); 
        
        if(cname === '' || nic=== '' || 
           phone === '' || address === '' || 
           email === '' || productName === ''||
           serialNumber === '' || saleDate === '' || 
           assignTo === '' || assignTo === '- Choose technician -'){
            setErrorMessage("error-class");
            return;
        }
        else{
            setErrorMessage('no-error-class'); 
        }

        let workorder = {woNumber:WOnumber,
                        productName:productName,
                        serialNumber:serialNumber,
                        saleDate:saleDate,
                        warrentyStatus:warrentyStatus,
                        assignTo:assignTo,
                        nic:nic,
                        cname:cname, 
                        address:address,
                        email:email,
                        phone:phone,
                        }
        
        WorkOrderService.createWorkOrder(workorder).then( res => {
            props.history.push("/workorders");
        }).catch(error => {
            console.log(error);
        });
    }

    const cancel = () => {
        props.history.push("/workorders");
    } 
    
    return ( 
        <div>
            <form id="create-workorder-form">
                <h2>Create New Work Order</h2>
                <div className="create-workorder-form-container">
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
                        <input type="date" required className="date-picker"
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

                        <label>Assign to</label>
                        <select required
                            value={assignTo}
                            onChange = {(e) => setAssignTo(e.target.value)}>
                            <option value="- Choose technician -">- Choose technician -</option> 
                            <option value="AUDIO">AUDIO</option>
                            <option value="COMPUTERS">COMPUTERS</option>
                            <option value="GENERATORS">GENERATORS</option>
                            <option value="REFREGIRATOR">REFREGIRATOR</option>
                            <option value="SEWING MACHINE">SEWING MACHINE</option>
                            <option value="TELEVISION">TELEVISION</option>
                            <option value="WASHING MACHINE">WASHING MACHINE</option>
                        </select>
                    </div>
                </div>  

                <div className={errorMessage}>
                    Please fill all the feilds with correct information
                </div>  

                <div id="form-buttons-workorder">
                    <button onClick={saveWorkorder} className="create-wo-form-button">Create</button>
                    <button className="create-wo-form-button" onClick={cancel} >Cancel</button>
                </div>
            </form>
        </div>    
     );
}
 
export default withRouter(CreateWorkOrder);