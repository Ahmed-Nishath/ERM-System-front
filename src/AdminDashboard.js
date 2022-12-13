import { Link } from "react-router-dom";
import workorderImg from "./Icons/workorder.svg";
import technicianImg from "./Icons/technician.svg";
import deliveryImg from "./Icons/delivery.svg";
import paymentImg from "./Icons/payment.svg";
import partsImg from "./Icons/parts.svg";
import statImg from "./Icons/stat.svg";
import stockImg from "./Icons/stock.svg";

import Box from "./Box";

const AdminDashboard = () => {
    return ( 
        <div>
            <h2 id="dashboard-heading">Dashboard</h2>
            <hr/>
            <div className="dashboard-boxes">
                <Link to="/workOrders">
                    <Box name={"WorkOrders"} image={workorderImg}/>
                </Link>

                <Box name={"Technicians"} image={technicianImg}/>
                <Box name={"Delivery"} image={deliveryImg}/>
                <Box name={"Payments"} image={paymentImg}/>
                <Box name={"Parts"} image={partsImg}/>
                <Box name={"Bussines"} image={statImg}/>
                <Box name={"Stocks"} image={stockImg}/>
                
                <Box name={"Untitled"} image={stockImg}/>
                <Box name={"Untitled"} image={stockImg}/>
                <Box name={"Untitled"} image={stockImg}/>
                <Box name={"Untitled"} image={stockImg}/>
            </div>
        </div>
     );
}
 
export default AdminDashboard;
