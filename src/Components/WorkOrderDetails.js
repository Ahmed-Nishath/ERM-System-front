import { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import WorkOrderService from "../WorkOrderService";
import deleteIcon from "./Icons/delete.svg"
import editIcon from "./Icons/edit.svg"
import { Link } from "react-router-dom";

  const WorkOrderDetails = (props) => {
  const { id } = useParams();
  const [wo, setWo] = useState([]);

  useEffect(() =>{
    WorkOrderService.getWorkOrderById(id).then(res =>{
        setWo(res.data)
    }).catch(error =>{
        console.log(error);
    })
  },[])

const deleteWorkOrder = (id) => {
  WorkOrderService.deleteWorkOrder(id).then((res)=>{
    props.history.push("/workorders");
  }).catch((error) => {
    console.log(error);
  })
}

  return (
    <div>
        <div>
          <div id="wo-detail-heading">Work Order Information</div>
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
                        {/* <div><b>Warrenty Status</b> : {wo.product.warrentyStatus} </div> */}
                      </div>
                </div>
              </div>  
            <div className="comment">
                <div>Comment Here</div>
                <textarea></textarea>
                <div id="add-comment-button"><button>Add</button></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default withRouter(WorkOrderDetails);
