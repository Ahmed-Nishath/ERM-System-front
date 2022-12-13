import workorderImg from "./workorder.svg";
import technicianImg from "./technician.svg";
import deliveryImg from "./delivery.svg";
import paymentImg from "./payment.svg";
import partsImg from "./parts.svg";
import statImg from "./stat.svg";
import stockImg from "./stock.svg";

import Box from "./Box";

const AdminDashboard = () => {
    return ( 
        <div className="admin-dashboard">
            <div className="side-panel">
                
            </div>

            <div>
                <h2 id="dashboard">Dashboard</h2>
                <div className="dashboard-boxes">
                    <Box name={"WorkOrders"} image={workorderImg}/>
                    <Box name={"Technicians"} image={technicianImg}/>
                    <Box name={"Delivery"} image={deliveryImg}/>
                    <Box name={"Payments"} image={paymentImg}/>
                    <Box name={"Parts"} image={partsImg}/>
                    <Box name={"Bussines"} image={statImg}/>
                    <Box name={"Stocks"} image={stockImg}/>
                </div>
            </div>
        </div>
     );
}
 
export default AdminDashboard;
