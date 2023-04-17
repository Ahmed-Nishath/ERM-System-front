import Axios from 'axios';

const TECHNICIAN_API_BASE_URL = "http://localhost:8080/protech/api/technicians";

class TechnicianService{
    getTechnicians(){
        return Axios.get(TECHNICIAN_API_BASE_URL);
    }

    createTechnician(technician){
        return Axios.post(TECHNICIAN_API_BASE_URL + '/register', technician)
    }

    login(technician){
        return Axios.post(TECHNICIAN_API_BASE_URL + '/login', technician)
    }

    getTechnicianById(id){
        return Axios.get(TECHNICIAN_API_BASE_URL + '/' + id)
    }

    updateTechnician(id, technician){
        return Axios.put(TECHNICIAN_API_BASE_URL + '/' + id, technician);
    }

    deleteTechnician(id){
        return Axios.delete(TECHNICIAN_API_BASE_URL + '/' + id);
    }
}
export default new TechnicianService();