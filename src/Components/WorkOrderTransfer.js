import React, { useEffect, useState } from "react";
import WorkOrderService from "../WorkOrderService";
import { withRouter } from "react-router-dom";
import searchIcon from "./Icons/search.svg";
import Header from "./Header";

function WorkOrderTransfer(props) {
  const [workorders, setWorkorders] = useState([]);
  const [search, setSearch] = useState("");

  const [reason, setReason] = useState('');
  const [technician, setTechnician] = useState('');
  const [errorMessage, setErrorMessage] = useState('no-error-class');

  const [dynamic, setDynamic] = useState('');
  const [hide, setHide] = useState('');
  const [selectedWo, setSelectedWo] = useState('');

  const getAllWorkOrder = () => {
    WorkOrderService.getWorkOrders()
      .then((res) => {
        setWorkorders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllWorkOrder();

    if(search ==='') {
      setHide();
      setDynamic('hide');
    }
    else {
      setHide("hide");
      setDynamic('');
    }

  }, [search]);

  const saveTranfer = (e) =>{
    e.preventDefault(); 

    if(reason === '' || technician === '' || selectedWo ===''){
        setErrorMessage("error-class-transfer");
        return;
    }
    else{
        setErrorMessage('no-error-class'); 
    }
    selectedWo.assignTo = technician;
    WorkOrderService.updateWorkOrder(selectedWo.id, selectedWo).then(res =>{
        props.history.push("/");
    }).catch(error =>{
        console.log(error);
    });
  }

  const cancel = () => {
    props.history.push("/");
  }

  return (
      <div className="transfer">
          <div className="header-transfer">
            <Header user="Technician" page="Transfer Work Order" />
          </div>

          <div className="tranfer-main-container">
              <div className="drop-down-main-container"> 
                <span className="searchbar-content">
                  <span className="search">
                    <input
                      id="search-input-transfer"
                      type="text"
                      placeholder="Search Work Order"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <img id="magnifying-glass" src={searchIcon} alt="search" />
                  </span>
                </span>

                <div className="drop-down-container" id={dynamic}>
                  {workorders
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? ""
                        : item.woNumber.toLowerCase().includes(search.toLowerCase()) ||
                        item.productName.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((wo) => {
                      return (
                        <div className="tranfer-drop-down" key={wo.id}>
                          <div onClick={(e) => {
                            setSelectedWo(wo)
                            setSearch('');
                            setDynamic("hide");
                          }}> {wo.woNumber} </div>
                        </div>
                      );
                    })}
                </div>
                <div className="selected-wo-to-transfer" id={hide}>
                  <h2>{selectedWo.woNumber}</h2>
                  <div className="transfer-wo-details">
                      <div>{selectedWo && "Product : " + selectedWo.productName}</div>
                      <div>{selectedWo && "Serial Number : " + selectedWo.serialNumber}</div>
                      <div>{selectedWo && "Date of Sale : " + selectedWo.saleDate}</div>
                      <div>{selectedWo && "Warrenty Status : "} <span>{selectedWo.warrentyStatus}</span></div>
                  </div>
                </div>
              </div>

              <div className="transfer-operations">
                <form id="transfer-workorder-form">
                <div className="transfer-feilds">
                  <label>Transfer to</label><br />
                  <select required
                    value={technician}
                    onChange={(e) => setTechnician(e.target.value)}>
                      <option value="- Choose technician -">- Choose Technician -</option> 
                      <option value="AUDIO">AUDIO</option>
                      <option value="COMPUTERS">COMPUTERS</option>
                      <option value="GENERATORS">GENERATORS</option>
                      <option value="REFREGIRATOR">REFREGIRATOR</option>
                      <option value="SEWING MACHINE">SEWING MACHINE</option>
                      <option value="TELEVISION">TELEVISION</option>
                      <option value="WASHING MACHINE">WASHING MACHINE</option>
                  </select>
                </div>

                <div className="transfer-feilds">
                  <label>Transfer reason: </label><br />
                  <textarea required
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>

                  <div className={errorMessage}>
                    Please fill all the feilds with correct information
                  </div>

                  <div id="form-buttons-transfer">
                    <button onClick={saveTranfer} className="transfer-form-transfer-button">Transfer</button>
                    <button className="transfer-form-cancel-button" onClick={cancel} >Cancel</button>
                  </div>
                </form>
              </div>
          </div>
      </div>
  );
}
export default withRouter(WorkOrderTransfer);
