import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Opps..!</h2>
            <p>That page cannot be found. Please check the URL.</p>
            <Link to={'/'}>Back to Home</Link>
        </div>
     );
}
 
export default NotFound;