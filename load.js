const _ = require('lodash');


let text = "key1=value1;key2=value2\nkeyA=valueA\n";

// let text = ["key1=value1;key2=value2\nkeyA=valueA\n"];
const load = (data = '') => {
    try {
        if (data != null) {
            //check format data
            if (isString(data)) {
                let result = [];
                let arrData = data.split('\n');
                if (arrData[0] != '') {
                    _.forEach(arrData, (value) => {
                        let arrObject = value.split(';');
                        let objectPutArr = {};
                        _.forEach(arrObject, (iObject) => {
                            let object = iObject.split('=');
                            //check format data object
                            if (object.length > 1) {
                                if (object[0] != '' && object[1] != '') {
                                    objectPutArr[object[0]] = object[1];
                                }
                            }else throw 'error : format data object';
                        });
                        result.push(objectPutArr);
                    });
                }
                return result;
            } else throw 'error : format data';
        } else return [];
    } catch (error) {
        return error;
    }
}

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

let b = load(text);
console.log(b)