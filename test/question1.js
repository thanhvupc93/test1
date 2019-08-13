const assert = require('assert');
import { load } from '../src/question1/load';
import { store } from '../src/question1/store';

const data = [ {key1: 'value1',key2: 'value2'}, {keyA: 'valueA'}];
const dataError = [ [{key1: 'value1',key2: 'value2'}], {keyA: 'valueA'}];

const dataString = 'key1=value1;key2=value2\nkeyA=valueA\n';
const dataStringErrObject = 'key1=value1;key2=value2\nkeyA\n';
const errMessage = 'error : format data';
const errObjectMessage ='error : format data object'

describe('Do load data', () => {
    it('should return string text successfully', () => {
        const text = load(data);
        assert.equal(dataString, text);
    });
});

describe('Do load data format data error', () => {
    it('should return string text error : format data', () => {
        const text = load(dataError);
        assert.equal(errMessage, text);
    });
});

describe('Do store data', () => {
    it('should return object successfully', () => {
        const arrObjs = store(dataString);
        assert.deepEqual(data, arrObjs);
    });
});

describe('Do store data format data error', () => {
    it('should return error : format data', () => {
        const arrObjs = store(data);
        assert.deepEqual(errMessage, arrObjs);
    });
});

describe('Do store data error format data object', () => {
    it('should return error : format data object', () => {
        const arrObjs = store(dataStringErrObject);
        assert.deepEqual(errObjectMessage, arrObjs);
    });
});