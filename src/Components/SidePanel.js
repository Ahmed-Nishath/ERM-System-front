import { Link } from "react-router-dom";

import workorderImg from "./Icons/workorder.svg";
import userImg from "./Icons/users.svg";
import partsImg from "./Icons/parts.svg";
import transferImg from "./Icons/transfer.svg";
import stockImg from "./Icons/stock.svg";
import settingsImg from "./Icons/settings.svg";
import deviceImg from "./Icons/device.svg";
import clientsImg from "./Icons/clients.svg";
import completeImg from "./Icons/update_repair.svg";
import updateEstimateImg from "./Icons/update_estimate.svg";

import PanelTile from "./PanelTile";

const SidePanel = () => {
    return ( 
        <div className="side-panel-main-container">
             
            <Link to="/workorders">
                <PanelTile name={"WorkOrders"} image={workorderImg}/>
            </Link>

            <Link to="/transfer-workorder">
                <PanelTile name={"Transfer"} image={transferImg}/>
            </Link>

            <Link to="/estimate-update">
                <PanelTile name={"Add Estimate"} image={updateEstimateImg}/>
            </Link>

            <Link to="/complete">
                <PanelTile name={"Complete WorkOrder"} image={completeImg}/>
            </Link>

            <Link to="/customers">
                <PanelTile name={"Customers"} image={userImg}/>
            </Link>

            <Link to="/products">
                <PanelTile name={"Products"} image={deviceImg}/>
            </Link>

            <PanelTile name={"Parts"} image={partsImg}/>
            <PanelTile name={"Settings"} image={settingsImg}/>
            <PanelTile name={"Stock"} image={stockImg}/>
            <PanelTile name={"Clients"} image={clientsImg}/>
            
        </div>
     );
}
 
export default SidePanel;