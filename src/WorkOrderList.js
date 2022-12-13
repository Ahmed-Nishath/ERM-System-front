import { Link } from "react-router-dom";
import SearchBar from "./search";
import add from "./Icons/add.svg"

const WorkOrderList = ({workorders}) => {
    return ( 
        <div className="wo-list">
          <SearchBar />
          <Link to="/create">
              <span className="buttons">
                  <img src={add} alt="Add new" />
                  <div>Create</div>
              </span>
          </Link>

        <div className="header-tags">
          <div>WO number</div>
          <div>Product</div>
          <div>Customer</div>
          <div>Contact</div>
        </div>
        {
          workorders.map((wo) => {
            return (
              <Link id="wo-link" to={`/workorder/${wo.id}`}> 
                <div className="wo-previwe" key={wo.id}>
                  <div>{wo.woNumber}  </div>
                  <div> {wo.product.productName} </div>
                  <div> {wo.customer.name} </div>
                  <div> {wo.customer.contact} </div>
                </div>
              </Link>
            );
          })
        }
        </div>
     );
}
 
export default WorkOrderList;