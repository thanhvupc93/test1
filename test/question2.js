const assert = require('assert');
import { finding } from '../src/question2/controller';



describe('Do finding A -> C -> D -> A', () => {
    it('should return number successfully', () => {
        let vertices = ['A4', 'B12', 'C1', 'D13'];
        let edges = ['A->C','C->D', 'D->A'];
        const result = finding(vertices, edges);
        assert.equal(19, result);
    });
});

describe('Do finding A -> B', () => {
    it('should return number successfully', () => {
        let vertices = ['A4', 'B12', 'C1', 'D13'];
        let edges = ['A->B'];
        const result = finding(vertices, edges);
        assert.equal(16, result);
    });
});