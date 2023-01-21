import { useState } from "react";
import { useHistory } from "react-router-dom";

const WorkOrderUpdate = (wo) => {
    const [name, setName] = useState(wo.customer.name);
    const [nic, setNIC] = useState(wo.customer.nic);
    const [address, setAddress] = useState(wo.customer.address);
    const [contact, setContact] = useState(wo.customer.contact);
    const [email, setEmail] = useState(wo.customer.email);
    const [productName, setProductName] = useState(wo.product.productName);
    const [serialNumber, setSerialNumber] = useState(wo.product.serialNumber);
    const [saleDate, setSaleDate] = useState(wo.product.saleDate);
    const [warrentyStatus, setWarrentyStatus] = useState(wo.product.warrentyStatus);

    const [isPending, setIsPending] = useState(false);

    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const workorder = {
            "woNumber": wo.woNumber,
            "customer": {
              name,
              nic,
              address,
              contact,
              email
            },
            "product": {
              productName,
              serialNumber,
              saleDate,
              warrentyStatus
            }
          }
          setIsPending(true);

          fetch('http://localhost:8000/workOrders', {
            method: 'PUT',
            headers: {"Content-Type": "application/json" }, 
            body: JSON.stringify(workorder)
          }).then(() => {
            setIsPending(false);
            //history.go(-1); //go back one step
            history.push('/');           
            window.location.reload(true); //find a better method to reset the form
          });
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className="create-form">
                    <div className="form-user-info">
                        <h4>User Information</h4>
                        <label>Customer Name: </label><br/>
                        <input type="text" required 
                            value={name}
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
                            value={contact}
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
                { !isPending && <button>Update</button> }
                { isPending && <button disabled>Please wait</button> }
            </form>
        </div>    
     );
}
 
export default WorkOrderUpdate;