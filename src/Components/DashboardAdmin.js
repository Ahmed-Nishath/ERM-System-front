import { Link } from "react-router-dom";
import workorderImg from "./Icons/workorder.svg";
import technicianImg from "./Icons/technician.svg";
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
                <Link to="/workOrders">
                    <Tile name={"WorkOrders"} image={workorderImg}/>
                </Link>

                <Link to="/technician">
                    <Tile name={"Technicians"} image={technicianImg}/>
                </Link>

                <Link to="/delivery">
                    <Tile name={"Delivery"} image={deliveryImg}/>
                </Link>

                <Tile name={"Payments"} image={paymentImg}/>
                <Tile name={"Parts"} image={partsImg}/>
                <Tile name={"Bussines"} image={statImg}/>
                <Tile name={"Stocks"} image={stockImg}/>
                
                <Tile name={"Settings"} image={settingsImg}/>
                <Tile name={"Reports"} image={reportImg}/>
                <Tile name={"Clients"} image={clientsImg}/>
                <Tile name={"New Service"} image={newImg}/>
            </div>
        </div>
     );
}
 
export default DashboardAdmin;
