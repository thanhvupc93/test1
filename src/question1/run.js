import {load} from './load';
import {store} from './store';

export const run = () => {
    const toArray = store('key1=value1;key2=value2\nkeyA=valueA');
    console.log('=================    Function to array:  ======================');
    console.log('Input: ', 'key1=value1;key2=value2\nkeyA=valueA');
    console.log('Output', toArray);
    console.log('=================    Function to text:  ======================');
    console.log('Input: ', toArray);
    const text = load(toArray);
    console.log('Output', JSON.stringify(text));
};
