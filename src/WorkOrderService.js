import Axios from 'axios';

const WORKORDER_API_BASE_URL = "http://localhost:8080/protech/api/workorders";

class WorkOrderService{
    getWorkOrders(){
        return Axios.get(WORKORDER_API_BASE_URL);
    }

    createWorkOrder(workorder){
        return Axios.post(WORKORDER_API_BASE_URL, workorder);
    }

    getWorkOrderById(id){
        return Axios.get(WORKORDER_API_BASE_URL + '/' + id);
    }

    getWorkOrderByWO(woNumber){
        return Axios.get(WORKORDER_API_BASE_URL + '/user/' + woNumber);
    }

    updateWorkOrder(id, workorder){
        return Axios.put(WORKORDER_API_BASE_URL + '/' + id, workorder);
    }

    deleteWorkOrder(id){
        return Axios.delete(WORKORDER_API_BASE_URL + '/' + id);
    }

    getComment(id){
        return Axios.get(WORKORDER_API_BASE_URL + '/comment/' + id);
    }

    updateComment(id, comment){
        return Axios.put(WORKORDER_API_BASE_URL + '/comment/' + id, comment);
    }
}
export default new WorkOrderService();