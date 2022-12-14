import { Link } from "react-router-dom";
import homeImg from "./Icons/home.svg";
import workorderImg from "./Icons/workorder.svg";

import PanelTile from "./PanelTile";


const SidePanel = () => {
    return ( 
        <div className="side-panel-main-container">
            <Link to="/">
                <PanelTile name="Home" image={homeImg} />
            </Link>
            
            <Link to="/workOrders">
                <PanelTile name="Work Orders" image={workorderImg} />
            </Link>

            <Link to="/xxxxx">
                <PanelTile name="Xxxxx" image={workorderImg} />
            </Link>

            <Link to="/xxxxx">
                <PanelTile name="Xxxxx" image={workorderImg} />
            </Link>
        </div>
     );
}
 
export default SidePanel;