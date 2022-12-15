import { useHistory, useParams } from "react-router-dom";
import useFetch from "../FunctionUseFetch";
import deleteIcon from "./Icons/delete.svg"
import editIcon from "./Icons/edit.svg"

const WorkOrderDetails = () => {
  const { id } = useParams();
  const {data: wo,error,isPending,} = useFetch("http://localhost:8000/workOrders/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/workOrders/' + wo.id, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/workorders');
      window.location.reload(true); //find a better method to reset the form
    })
  }
  return (
    <div>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div>{error}</div>}

      {wo && (
        <div>
          <div id="wo-detail-heading">Work Order Information - {wo.woNumber}</div>
          <div id="actions">
            <div id="update-button">
              <img src={editIcon} alt="edit" />
              <button>Update</button>
            </div>
            
            <div onClick={handleClick} id="delete-button">
              <img src={deleteIcon} alt="delete" />
              <button >Delete</button>
            </div>
          </div>
          
          <div className="wo-info-preview">
              <div className="wo-info">  
                <div className="customer">
                    <p>Customer Information</p><hr/>
                    <div className="customer-details">
                      <div><b>Customer Name</b> : {wo.customer.name} </div>
                      <div><b>NIC Number</b> : {wo.customer.nic} </div>
                      <div><b>Address</b> : {wo.customer.address} </div>
                      <div><b>Contact</b> : {wo.customer.contact} </div>
                      <div><b>Email</b> : {wo.customer.email} </div>
                    </div>
                </div>

                <div className="product">
                    <p>Product Information</p><hr/>
                      <div className="product-details">
                        <div><b>Product Name</b> : {wo.product.productName} <br/> </div>
                        <div><b>Serial Number</b> : {wo.product.serialNumber} <br/> </div>
                        <div><b>Date of Sale</b> : {wo.product.saleDate} <br/> </div>
                        <div><b>Warrenty Status</b> : {wo.product.warrentyStatus} </div>
                      </div>
                </div>
              </div>  
            <div className="comment">
                <div>Add comment here...</div>
                <textarea></textarea>
                <div id="add-comment-button"><button>Add</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkOrderDetails;
