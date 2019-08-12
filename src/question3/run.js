import Product from "./model/Product";
import User from "./model/User";
import UserType from "./model/UserType";
import {createdBill} from "./controllers/orderController";

export const run = () => {
    console.log("=================  Order Info:  ======================");
    const userType = new UserType(1, 'employee', new Date().getTime());
    const user = new User(1, "Adam", userType, new Date().getTime());
    const banana = new Product(1, 'banana', 70, new Date().getTime());
    const apple = new Product(2, 'apple', 350, new Date().getTime());
    const products = [banana, apple];
    console.log('Input')
    console.log('User:', user);
    console.log('Product banana:', banana);
    console.log('Product apple:', apple);
    const orderInfo = createdBill(user, products);
    console.log('Output: ', orderInfo);
};
