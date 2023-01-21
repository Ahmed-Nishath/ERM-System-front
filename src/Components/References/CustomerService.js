import Axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/protech/api/customers";

class CustmerService{
    getCustomers(){
        return Axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return Axios.post(CUSTOMER_API_BASE_URL, customer)
    }

    getCustomerById(custid){
        return Axios.get(CUSTOMER_API_BASE_URL + '/' + custid)
    }

    updateCustomer(id, customer){
        return Axios.put(CUSTOMER_API_BASE_URL + '/' + id, customer);
    }

    deleteCustomer(id){
        return Axios.delete(CUSTOMER_API_BASE_URL + '/' + id);
    }
}
export default new CustmerService();