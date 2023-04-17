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

import Tile from "./Tile";

const DashboardTechnician = () => {
    return ( 
        <div>
            <h2 id="dashboard-heading">Dashboard</h2>
            <hr/>
            <div className="dashboard-tiles">
                <Link to="/workorders-technician">
                    <Tile name={"WorkOrders"} image={workorderImg}/>
                </Link>

                <Link to="/transfer-workorder">
                    <Tile name={"Transfer"} image={transferImg}/>
                </Link>

                <Link to="/estimate-update">
                    <Tile name={"Add Estimate"} image={updateEstimateImg}/>
                </Link>

                <Link to="/complete">
                    <Tile name={"Complete WorkOrder"} image={completeImg}/>
                </Link>
 
                <Link to="/customers">
                    <Tile name={"Customers"} image={userImg}/>
                </Link>

                <Link to="/products">
                    <Tile name={"Products"} image={deviceImg}/>
                </Link>

                <Tile name={"Parts"} image={partsImg}/>
                <Tile name={"Stock"} image={stockImg}/>
                <Tile name={"Clients"} image={clientsImg}/>
                <Tile name={"Settings"} image={settingsImg}/>

            </div>
        </div>
     );
}
 
export default DashboardTechnician;
