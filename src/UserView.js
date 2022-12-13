import SearchBar from "./search";
import approveImg from "./Icons/approve.svg"
import rejectImg from "./Icons/reject.svg"
import contactImg from "./Icons/contact.svg"

const UserView = () => {
    return ( 
        <div>
            <h1>Black Eagle Electronic Services</h1>
            <h2>Estimate Approval Form</h2>
            <h3>Enter the Work order number</h3>
            <SearchBar/>

            <h2>WO202201026585</h2>
                <div className="user-view">
                    <div className="user-view-details-block">
                        <div><b>Name</b><br/>{"Ahmed Nishath"}</div>
                        <div><b>Product</b><br/>{"Sewing Machine"}</div>
                        <div><b>Serial Number</b><br/> {"SR000111"}</div>               
                    </div>

                    <div className="user-view-cost-block">
                        <div><b>Estimated Cost</b><br/> {"15,500.00"}</div>  
                        <div><b>Estimated Time</b><br/> {"10 Days"}</div>  
                    </div>

                    <div className="user-view-buttons-container">
                        <div id="user-decisions">
                            <div id="user-approv" className="user-view-buttons">
                                <img src={approveImg} alt="Approve" />
                                <div>Approve estimate</div>
                            </div>

                            <div id="user-reject" className="user-view-buttons">
                                <img src={rejectImg} alt="Reject" />
                                <div>Reject estimate</div>
                            </div>
                        </div>
                        
                        <div id="user-contact" className="user-view-buttons">
                            <img src={contactImg} alt="contact" />
                            <div>Contact Technician</div> 
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default UserView;