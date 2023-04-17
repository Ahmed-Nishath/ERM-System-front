import { useState } from "react";
import {withRouter } from "react-router-dom";
import TechnicianService from "../TechnicianService";
import Header from "./Header";

const TechnicianCreate = (props) => {
    
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setContact] = useState('');
    const [feild, setFeild] = useState('');
    const [errorMessage, setErrorMessage] = useState('no-error-class');

    const saveTechnician = (e) =>{
        e.preventDefault(); 
        
        if(userName === '' || email=== '' || 
           phone === '' || feild === '' ||  
           feild === '- Choose feild -') {
            setErrorMessage("error-class");
            return;
        }
        else{
            setErrorMessage('no-error-class'); 
        }

        let technician = {  userName:userName, 
                            email:email,
                            phone:phone, 
                            feild:feild
                        }
    
        TechnicianService.createTechnician(technician).then(res => {
            props.history.push("/technicians");
        }).catch(error =>{
            console.log(error);
        });
    }

    const cancel = () =>{
        props.history.push("/technicians");
    }
 
    return (
        <div>
            <form id="create-technician-form">
            <Header user="Admin" page="Create New Technician"/>
                <div className="form-feilds-container">
                    <div className="form-feilds" id="form-feild-first">
                        <label>Technicain Name: </label>
                        <input type="text" required 
                            value={userName}
                            onChange = {(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="form-feilds">
                        <label>Email: </label>
                        <input type="text" required
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-feilds">
                        <label>Contact number: </label>
                        <input type="text" required
                            value={phone}
                            onChange = {(e) => setContact(e.target.value)}
                        />
                    </div>

                    <div className="form-feilds">
                        <label>Feild</label>
                        <select required
                            value={feild}
                            onChange = {(e) => setFeild(e.target.value)}>
                            <option value="- Choose feild -">- Choose feild -</option> 
                            <option value="AUDIO">AUDIO</option>
                            <option value="COMPUTERS">COMPUTERS</option>
                            <option value="GENERATORS">GENERATORS</option>
                            <option value="REFREGIRATOR">REFREGIRATOR</option>
                            <option value="SEWING MACHINE">SEWING MACHINE</option>
                            <option value="TELEVISION">TELEVISION</option>
                            <option value="WASHING MACHINE">WASHING MACHINE</option>
                        </select>
                    </div>

                        <div className={errorMessage}>
                            Please fill all the feilds
                        </div>  

                        <div id="form-buttons-technician">
                            <button onClick={saveTechnician} className="create-technician-button">Create</button>
                            <button className="create-technician-button" onClick={cancel} >Cancel</button>
                        </div>
                </div>
            </form>
        </div>
     );
}
 
export default withRouter(TechnicianCreate);