import {store} from './store';
import {load} from './load';

export const run = () => {
    const toArray = load('key1=value1;key2=value2\nkeyA=valueA');
    console.log('=================    Function to array:  ======================');
    console.log('Input: ', 'key1=value1;key2=value2\nkeyA=valueA');
    console.log('Output', toArray);
    console.log('=================    Function to text:  ======================');
    console.log('Input: ', toArray);
    const text = store(toArray);
    console.log('Output', JSON.stringify(text));
};
