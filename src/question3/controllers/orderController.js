import Order from "../model/Order";

export const createdBill = (user = {}, products = []) => {
    const order = new Order(1, user, products, new Date().getTime());
    let totalPriceProduct = order.products.reduce((sum, product) => sum + product.price, 0) || 0;
    isNumber(totalPriceProduct) ? totalPriceProduct= totalPriceProduct : totalPriceProduct = -1;
    let productList = '';
    order.products.forEach( product =>{
        productList += ` Name: ${product.name} - price:  ${product.price} ;`
    });
    let discountPrice = getdiscountPrice(user, totalPriceProduct);
    return {
        name: order.user.name,
        products: productList,
        totalPrice: totalPriceProduct,
        discountPrice: discountPrice,
        totalMoney: discountPrice != 'error : format data' ? totalPriceProduct - discountPrice : -1
    }
}

const getdiscountPrice = (user, totalPrice) => {
    try {
        // check data input
        if (user && isNumber(totalPrice) && totalPrice != -1) {
            let discountPrice = 0;
            switch (user.type.name) {
                case 'employee':
                    discountPrice = totalPrice * 0.3;
                    break;
                case 'affiliate':
                    discountPrice = totalPrice * 0.1;
                    break;
                case 'groceries':
                    discountPrice = 0;
                    break;
                default:
                    // check two year
                    if (new Date().getTime() - new Date(user.type.createAt).getTime() > 63115200000) {
                        discountPrice = totalPrice * 0.05
                    } else if (totalPrice >= 100) {
                        discountPrice = Math.floor((totalPrice / 100)) * 5
                    } else discountPrice = totalPrice;
                    break;
            }
            return discountPrice
        } else throw 'error : format data';
    } catch (error) {
        return error
    }

}

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

