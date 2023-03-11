import Axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/protech/api/products";

class ProductService{
    getProducts(){
        return Axios.get(PRODUCT_API_BASE_URL);
    }
}
export default new ProductService();