import { useState } from "react";

const Popup = ({message, link, linkClass}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    return ( 
        <div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">

                    </div>
                    <div className="modal-content">
                        <p>{message}</p>

                        <button className="close-modal" onClick={toggleModal}>
                            <div>Ok</div> 
                        </button>
                    </div>
                </div>
                )}
                <p onClick={toggleModal} className={linkClass}>{link}</p> 
        </div>
     );
}
 
export default Popup;