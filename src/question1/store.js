const _ = require('lodash');

export const store = (data = '') => {
    try {
        if (data != null) {
            //check format data
            if (isString(data)) {
                let result = [];
                // slip \n  , get data
                let arrData = data.split('\n');
                _.forEach(arrData, (value) => {
                    // if end string data have \n, split will have data = '',
                    if (value != '') {
                        // splip ; to get data key =
                        let arrObject = value.split(';');
                        let objectPutArr = {};
                        _.forEach(arrObject, (iObject) => {
                            // slip = to data add to arr, index 1 is key and index 2 is value
                            let object = iObject.split('=');
                            //check format data object if fail return eror
                            if (object.length > 1) {
                                if (object[0] != '' && object[1] != '') {
                                    objectPutArr[object[0]] = object[1];
                                }
                            } else throw 'error : format data object';
                        });
                        result.push(objectPutArr);
                    }
                });
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
