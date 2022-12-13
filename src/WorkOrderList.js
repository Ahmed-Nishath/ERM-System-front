import { Link } from "react-router-dom";

const WorkOrderList = ({workorders}) => {
    return ( 
        <div className="wo-list">
        <div className="header-tags">
          <div>WO number</div>
          <div>Product</div>
          <div>Customer</div>
          <div>Contact</div>
        </div>
        {
          workorders.map((wo) => {
            return (
              <Link id="wo-link" to={`/workorder/${wo.id}`}> <div className="wo-previwe" key={wo.id}>
                <div>{wo.woNumber}  </div>
                <div> {wo.product.productName} </div>
                <div> {wo.customer.name} </div>
                <div> {wo.customer.contact} </div>
              </div></Link>
            );
          })
        }
        </div>
     );
}
 
export default WorkOrderList;