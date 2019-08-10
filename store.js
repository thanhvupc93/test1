const _ = require('lodash');

let arr = [{key1: 'value1', key2: 'value2'}, {keyA: 'valueA'}];

// let arr = [ [{ key1: 'value1', key2: 'value2' }], { keyA: 'valueA' } ];

// let arr = { key1: 'value1', key2: 'value2' };

const store = (data = []) => {
    try {
        let result = '';
        _.forEach(data, (value) => {
            if (isObject(value)) {
                let arrKey = Object.keys(value);
                let characters;
                _.forEach(arrKey, (ikey, index) => {
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

console.log(store(arr));