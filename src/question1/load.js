const _ = require('lodash');

export const load = (data = []) => {
    try {
        let result = '';
        // for data
        _.forEach(data, (value) => {
            //check format data if input not equal Object return error
            if (isObject(value)) {
                // get key of object, get key and value to count character
                let arrKey = Object.keys(value);
                let characters;
                _.forEach(arrKey, (ikey, index) => {
                    // if end string data have character ;,
                    // check put ;, if end object not add character ;
                    arrKey.length - 1 > index ? characters = ';' : characters = '';
                    result += `${ikey}=${value[ikey]}${characters}`;
                });
                // add character \n when add object
                result += `\n`
            } else throw 'error : format data';
        });
        return result;
    } catch (error) {
        return error;
    }
}

function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}
