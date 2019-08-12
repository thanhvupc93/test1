import User from "../model/User";

export default class Order {
    constructor(id, user, products, createAt) {
        this.id = id;
        this.user = new User(user.id, user.name, user.type, user.createAt);
        this.products = products;
        this.createAt = createAt;
    }
};