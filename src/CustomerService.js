import Axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/protech/api/customers";

class CustomerService{
    getCustomers(){
        return Axios.get(CUSTOMER_API_BASE_URL);
    }
}
export default new CustomerService();