import approveImg from "./Icons/approve.svg"
import rejectImg from "./Icons/reject.svg"
import contactImg from "./Icons/contact.svg" 
import { useEffect, useState } from "react";
import WorkOrderService from "../WorkOrderService";
import { useParams } from "react-router-dom";
import logoImg from "./Icons/logo.svg";

const UserView = () => {

    const {id} = useParams();
    const [wo, setWo] = useState([]);

    useEffect(() => {
        WorkOrderService.getWorkOrderByWO(id).then(res => {
            setWo(res.data)
        }).catch(error => {
            console.log(error);
        })
    },[])

    const updateWorkorder = (status) => {
        return function(e){
            e.preventDefault(); 
    
            wo.status = status;
    
            WorkOrderService.updateWorkOrder(wo.id, wo).then(res => {
            }).catch(error => {
                console.log(error);
            });  
        };
    }

    return ( 
        <div>
            <div className="company-name" id="user-view-heading">
              <img src={logoImg} alt="Logo" />
              <h1>PRO-TECH SERVICES</h1>
            </div>
            <h2 id ="heading-user-view" className="sub-heading">Estimate Approval Form</h2>

            <h2 className="sub-heading">{wo.woNumber}</h2>
            <div className="user-view">
                <div className="user-view-details-block"> 
                    <div><b>Name</b><br/>{wo.cname}</div>
                    <div><b>Product</b><br/>{wo.productName}</div>
                    <div><b>Serial Number</b><br/> {wo.serialNumber}</div>               
                </div>

                <div className="user-view-cost-block">
                    <div><b>Estimated Cost</b><br/> {wo.cost}</div>  
                    <div><b>Estimated Completion Date</b><br/> {wo.estimatedCompletionDate}</div>  
                </div>

                <div className="user-view-buttons-container">
                    <div id="user-decisions">
                        <div onClick={updateWorkorder("REPAIR IN PROGRESS")} 
                            id="user-approve" className="user-view-buttons">
                            <img src={approveImg} alt="Approve" />
                            <div>Approve estimate</div>
                        </div>

                        <div onClick={updateWorkorder("ESTIIMATE REJECTED")} 
                             id="user-reject" className="user-view-buttons">
                            <img src={rejectImg} alt="Reject" />
                            <div>Reject estimate</div>
                        </div>

                        <a href="tel:077-898-32-62" style={{textDecoration:"none"}}>
                        <div id="user-contact" className="user-view-buttons">
                            <img src={contactImg} alt="contact" />
                            <div>Contact Technician</div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UserView;