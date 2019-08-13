const assert = require('assert');
import { store } from '../src/question1/store';
import { load } from '../src/question1/load';

const data = [ {key1: 'value1',key2: 'value2'}, {keyA: 'valueA'}];
const dataError = [ [{key1: 'value1',key2: 'value2'}], {keyA: 'valueA'}];

const dataString = 'key1=value1;key2=value2\nkeyA=valueA\n';
const dataStringErrObject = 'key1=value1;key2=value2\nkeyA\n';
const errMessage = 'error : format data';
const errObjectMessage ='error : format data object'

describe('Do store data', () => {
    it('should return string text successfully', () => {
        const text = store(data);
        assert.equal(dataString, text);
    });
});

describe('Do store data format data error', () => {
    it('should return string text error : format data', () => {
        const text = store(dataError);
        assert.equal(errMessage, text);
    });
});

describe('Do load data', () => {
    it('should return object successfully', () => {
        const arrObjs = load(dataString);
        assert.deepEqual(data, arrObjs);
    });
});

describe('Do load data format data error', () => {
    it('should return error : format data', () => {
        const arrObjs = load(data);
        assert.deepEqual(errMessage, arrObjs);
    });
});

describe('Do load data error format data object', () => {
    it('should return error : format data object', () => {
        const arrObjs = load(dataStringErrObject);
        assert.deepEqual(errObjectMessage, arrObjs);
    });
});