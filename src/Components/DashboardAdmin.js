import { Link } from "react-router-dom";
import workorderImg from "./Icons/workorder.svg";
import userImg from "./Icons/users.svg";
import deliveryImg from "./Icons/delivery.svg";
import paymentImg from "./Icons/payment.svg";
import partsImg from "./Icons/parts.svg";
import transferImg from "./Icons/transfer.svg";
import stockImg from "./Icons/stock.svg";
import settingsImg from "./Icons/settings.svg";
import reportImg from "./Icons/reports.svg";
import deviceImg from "./Icons/device.svg";
import clientsImg from "./Icons/clients.svg";
import technicianImg from "./Icons/technician.svg";
import completeImg from "./Icons/update_repair.svg";
import approveEstimateImg from "./Icons/Admin_estimate_Approve.svg";
import updateEstimateImg from "./Icons/update_estimate.svg";

import Tile from "./Tile";

const DashboardAdmin = () => {
    return ( 
        <div>
            <h2 id="dashboard-heading">Dashboard</h2>
            <hr/>
            <div className="dashboard-tiles">
                <Link to="/workorders">
                    <Tile name={"WorkOrders"} image={workorderImg}/>
                </Link>

                <Link to="/transfer-workorder">
                    <Tile name={"Transfer"} image={transferImg}/>
                </Link>

                <Link to="/technicians">
                    <Tile name={"Technicians"} image={technicianImg}/>
                </Link>
 
                <Link to="/customers">
                    <Tile name={"Customers"} image={userImg}/>
                </Link>

                <Link to="/products">
                    <Tile name={"Products"} image={deviceImg}/>
                </Link>

                <Link to="/delivery">
                    <Tile name={"Delivery"} image={deliveryImg}/>
                </Link>

                <Link to="/complete">
                    <Tile name={"Complete WorkOrder"} image={completeImg}/>
                </Link>

                <Link to="/payment">
                    <Tile name={"Payments"} image={paymentImg}/>
                </Link>

                <Link to="/estimate-approve">
                    <Tile name={"Estimate Approve"} image={approveEstimateImg}/>
                </Link>

                <Link to="/estimate-update">
                    <Tile name={"Add Estimate"} image={updateEstimateImg}/>
                </Link>

                <Tile name={"Parts"} image={partsImg}/>
                <Tile name={"Settings"} image={settingsImg}/>
                <Tile name={"Stock"} image={stockImg}/>
                <Tile name={"Clients"} image={clientsImg}/>

            </div>
        </div>
     );
}
 
export default DashboardAdmin;
