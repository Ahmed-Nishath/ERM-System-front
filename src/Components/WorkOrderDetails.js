import { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import WorkOrderService from "../WorkOrderService";
import deleteIcon from "./Icons/delete.svg"
import editIcon from "./Icons/edit.svg"
import { Link } from "react-router-dom";

  const WorkOrderDetails = (props) => {
  const {id} = useParams();
  const [wo, setWo] = useState([]);

  useEffect(() => {
    WorkOrderService.getWorkOrderById(id).then(res => {
        setWo(res.data)
    }).catch(error => {
        console.log(error);
    })
  },[])

  const deleteWorkOrder = (id) => {
    WorkOrderService.deleteWorkOrder(id).then((res) => {
      props.history.push("/workorders");
    }).catch((error) => {
      console.log(error);
    })
  }

  const getDate = () => {
    if(wo != ''){
      const date = wo.woNumber.substring(2,6) + '-' 
                 + wo.woNumber.substring(6,8) + '-' 
                 + wo.woNumber.substring(8,10);
      return date
    }
  }

  return (
    <div>
        <div>
          <div id="wo-detail-heading">Work Order Information - {wo.woNumber}</div>
          <div id="actions">
            <Link id="update-button-container" to={`/update-workorder/${wo.id}`}>
            <div id="update-button">
              <img src={editIcon} alt="edit" />
              <button>Update</button>
            </div>
            </Link>
            
            <div id="delete-button" onClick={() => deleteWorkOrder(wo.id)}>
              <img src={deleteIcon} alt="delete" />
              <button >Delete</button>
            </div>
          </div>
          
          <div className="wo-info-preview">
              <div className="wo-info">  
                <div className="customer">
                    <p>Customer Information</p><hr/>
                    <div className="customer-details">
                      <div><b>Customer Name</b> : {wo.cname} </div>
                      <div><b>NIC Number</b> : {wo.nic} </div>
                      <div><b>Address</b> : {wo.address} </div>
                      <div><b>Contact</b> : {wo.phone} </div>
                      <div><b>Email</b> : {wo.email} </div>
                    </div>
                </div>

                <div className="product">
                    <p>Product Information</p><hr/>
                      <div className="product-details">
                        <div><b>Product Name</b> : {wo.productName} <br/> </div>
                        <div><b>Serial Number</b> : {wo.serialNumber} <br/> </div>
                        <div><b>Date of Sale</b> : {wo.saleDate} <br/> </div>
                        <div><b>Warrenty Status</b> : {wo.warrentyStatus} </div>
                        <div><b>Assign To</b> : {wo.assignTo} </div>
                      </div>
                </div>
              </div>  
              <div className="work-order-information">
                <div><b>Date Created</b>
                  <div className="wo-info-results"> 
                    {getDate()} 
                  </div>
                </div>
                <div><b>Work Order Status</b>
                  <div className="wo-info-results" id="blinking-status"> {wo.status} </div>
                </div>

                <div><b>Cost</b>
                  <div className="wo-info-results"> 
                    {wo.cost == 0 ? "Estimate not updated yet" : wo.cost}
                  </div>
                </div>

                <div><b>Estimated completion date</b>
                  <div className="wo-info-results"> 
                    {wo.estimatedCompletionDate}
                  </div>
                </div>

                <Link to={`/comment/${wo.id}`} id="comment-link-button">
                  <div className="add-comment-button-link">
                    Add or View Comments
                  </div>
                </Link> 
              </div>
          </div>
        </div>
    </div>
  );
};

export default withRouter(WorkOrderDetails);
