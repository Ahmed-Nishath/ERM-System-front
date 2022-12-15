import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateWorkOrder = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');
    var mm = String(today.getMonth()+1).padStart(2,'0'); //Januaru=0
    var yyyy = String(today.getFullYear()).padStart(2,'0');
    const WOnumber = "WO"+yyyy+mm+dd+""+rand;

    const [name, setName] = useState('');
    const [nic, setNIC] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [productName, setProductName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [saleDate, setSaleDate] = useState('');
    const [warrentyStatus, setWarrentyStatus] = useState('UNDER WARRENTY');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const workorder = {
            "woNumber": WOnumber,
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
            method: 'POST',
            headers: {"Content-Type": "application/json" }, 
            body: JSON.stringify(workorder)
          }).then(() => {
            setIsPending(false);
            //history.go(-1); //go back one step
            history.push('/workorders');           
            window.location.reload(true); //find a better method to reset the form
          });
    }
    return ( 
        <div>
            <form id="create-workorder-form" onSubmit={handleSubmit}>
                <h2>Create New Work Order</h2>
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
                { !isPending && <button className="create-wo-form-button">Create</button> }
                { isPending && <button className="create-wo-form-button" disabled>Please wait</button> }
            </form>
        </div>    
     );
}
 
export default CreateWorkOrder;