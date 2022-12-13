import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Opps..!</h2>
            <p>That page cannot be found. Please check the URL.</p>
            <div><Link to={'/'}>Back to Home</Link></div>
        </div>
     );
}
 
export default NotFound;