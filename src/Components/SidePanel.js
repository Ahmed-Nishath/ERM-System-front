import { Link } from "react-router-dom";
import homeImg from "./Icons/home.svg";
import userImg from "./Icons/users.svg";

import deliveryImg from "./Icons/delivery.svg";
import partsImg from "./Icons/parts.svg";
import stockImg from "./Icons/stock.svg";
import newImg from "./Icons/newservice.svg";
import settingsImg from "./Icons/settings.svg";
import reportImg from "./Icons/reports.svg";

import PanelTile from "./PanelTile";

const SidePanel = () => {
    return ( 
        <div className="side-panel-main-container">
            <Link to="/">
                <PanelTile name="Home" image={homeImg} />
            </Link>
            
            <Link to="/workorders">
                <PanelTile name="Parts" image={partsImg} />
            </Link>

            <Link to="/login">
                <PanelTile name="Users" image={userImg} />
            </Link>

            <Link to="/delivery">
                <PanelTile name="Delivery" image={deliveryImg} />
            </Link>

            <Link to="/stocks">
                <PanelTile name="Stocks" image={stockImg} />
            </Link>

            <Link to="/settings">
                <PanelTile name="Settings" image={settingsImg} />
            </Link>

            <Link to="/reports">
                <PanelTile name="Reports" image={reportImg} />
            </Link>

            <Link to="/add">
                <PanelTile name="Add" image={newImg} />
            </Link>

            <Link to="/add">
                <PanelTile name="Add" image={newImg} />
            </Link>
            
        </div>
     );
}
 
export default SidePanel;