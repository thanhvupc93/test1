import UserType from "../src/question3/model/UserType";

const assert = require('assert');
import { createdBill } from '../src/question3/controllers/orderController';
import User from "../src/question3/model/User";
import Product from "../src/question3/model/Product";

const userTypeEmployee = new UserType(1, 'employee', new Date().getTime());
const userTypeAffiliate = new UserType(2, 'affiliate', new Date().getTime());
const userType2year = new UserType(3, '', new Date('2016-03-01'));
const userTypeMore100 = new UserType(4, '', new Date().getTime());
const banana = new Product(1, 'banana', 70, new Date().getTime());
const apple = new Product(2, 'apple', 350, new Date().getTime());
const orange = new Product(3, 'orange', 455, new Date().getTime());
const orangeNotPrice = new Product(3, 'orange', 'error', new Date().getTime());
const products = [banana, apple];

describe('Do createdBill employee successfully', () => {
    it('should return created order employee successfully', () => {
        const user = new User(1, "Adam", userTypeEmployee, new Date().getTime());
        const orderInfo = createdBill(user, products);
        assert.deepStrictEqual(
            orderInfo,{ name: 'Adam',
                products: ' Name: banana - price:  70 ; Name: apple - price:  350 ;',
                totalPrice: 420,
                discountPrice: 126,
                totalMoney: 294 }


        );
    });
});

describe('Do createdBill affiliate successfully', () => {
    it('should return created order affiliate successfully', () => {
        const user = new User(1, "Adam", userTypeAffiliate, new Date().getTime());
        const orderInfo = createdBill(user, products);
        assert.deepStrictEqual(
            orderInfo,{ name: 'Adam',
                products: ' Name: banana - price:  70 ; Name: apple - price:  350 ;',
                totalPrice: 420,
                discountPrice: 42,
                totalMoney: 378 }

        );
    });
});
describe('Do createdBill 2year successfully', () => {
    it('should return created order 2year successfully', () => {
        const user = new User(1, "Adam", userType2year, new Date().getTime());
        const orderInfo = createdBill(user, products);
        assert.deepStrictEqual(
            orderInfo,{ name: 'Adam',
                products: ' Name: banana - price:  70 ; Name: apple - price:  350 ;',
                totalPrice: 420,
                discountPrice: 21,
                totalMoney: 399 }

        );
    });
});

describe('Do createdBill more 100$ successfully', () => {
    it('should return created order more 100$ successfully', () => {
        const user = new User(1, "Adam", userTypeMore100, new Date().getTime());
        const products1 = [apple, orange];
        const orderInfo = createdBill(user, products1);
        assert.deepStrictEqual(
            orderInfo,{ name: 'Adam',
                products: ' Name: apple - price:  350 ; Name: orange - price:  455 ;',
                totalPrice: 805,
                discountPrice: 40,
                totalMoney: 765 }

        );
    });
});


describe('Do createdBill order error', () => {
    it('should return created order error', () => {
        const user = new User(1, "Adam", userTypeMore100, new Date().getTime());
        const products1 = [apple, orangeNotPrice];
        const orderInfo = createdBill(user, products1);
        assert.deepStrictEqual(
            orderInfo,{ name: 'Adam',
                products: ' Name: apple - price:  350 ; Name: orange - price:  error ;',
                totalPrice: -1,
                discountPrice: 'error : format data',
                totalMoney: -1 }

        );
    });
});