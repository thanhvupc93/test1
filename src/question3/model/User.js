import UserType from "../model/UserType";

export default class User {
    constructor(id, name, type, createAt) {
        this.id = id;
        this.name = name;
        this.type = new UserType(type.id, type.name, type.createAt);
        this.createAt = createAt;
    }
};