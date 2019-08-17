## Environment:
- NodeJs >= 10
- Npm >= 5.6.0

## Install libraries from Node Js:
```
npm install
```

## Run and Test
- To run project: 
```
npm run start
```
- To test run:
```
npm test


## Quesion 1

Function load(data);
- Input array data, when forEach data, need check data is Object, if not equal Object return error
- Get Key of Object of data
- For it key, if end string data have character ;,
- Check put ;, if end object not add character ;
- If end Object, add character \n

Function store(data);
- If input data is not String, return error
- Slip \n of data, put data into array, 
- ForEach it data, Slip ; get data object,
- If end string data have \n, split will have data = '' and will not do it,
- Slip \; will have array data of object
- forEach it array data
- Slip = will get data for key and value
- Check format data object if fail return eror
- Set new Object have it key and value of Object when forEach
- Put new Object to array result
