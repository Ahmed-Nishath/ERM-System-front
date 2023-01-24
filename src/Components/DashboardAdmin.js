import { Link } from "react-router-dom";
import workorderImg from "./Icons/workorder.svg";
import userImg from "./Icons/users.svg";
import deliveryImg from "./Icons/delivery.svg";
import paymentImg from "./Icons/payment.svg";
import partsImg from "./Icons/parts.svg";
import statImg from "./Icons/stat.svg";
import stockImg from "./Icons/stock.svg";
import newImg from "./Icons/newservice.svg";
import settingsImg from "./Icons/settings.svg";
import reportImg from "./Icons/reports.svg";
import clientsImg from "./Icons/clients.svg";

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

                <Link to="/user-view">
                    <Tile name={"User View"} image={userImg}/>
                </Link>

                <Link to="/delivery">
                    <Tile name={"Delivery"} image={deliveryImg}/>
                </Link>

                <Link to="/payments">
                    <Tile name={"Payments"} image={paymentImg}/>
                </Link>

                <Link to="/create-technician">
                    <Tile name={"Technicians"} image={partsImg}/>
                </Link>

                <Link to="/transfer-workorder">
                    <Tile name={"Transfer"} image={statImg}/>
                </Link>

                <Link to="/comment">
                    <Tile name={"Stocks"} image={stockImg}/>
                </Link>

                <Tile name={"Settings"} image={settingsImg}/>
                <Tile name={"Reports"} image={reportImg}/>
                <Tile name={"Clients"} image={clientsImg}/>
                <Tile name={"New Service"} image={newImg}/>
            </div>
        </div>
     );
}
 
export default DashboardAdmin;
