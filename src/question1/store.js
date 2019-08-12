const _ = require('lodash');

export const store = (data = []) => {
    try {
        let result = '';
        _.forEach(data, (value) => {
            //check format data
            if (isObject(value)) {
                let arrKey = Object.keys(value);
                let characters;
                _.forEach(arrKey, (ikey, index) => {
                    // check put ;
                    arrKey.length - 1 > index ? characters = ';' : characters = '';
                    result += `${ikey}=${value[ikey]}${characters}`;
                });
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
