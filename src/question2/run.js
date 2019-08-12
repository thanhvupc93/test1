
import {finding} from "./controller";

const vertices = ['A4', 'B12', 'C1', 'D13'];
const edges = ['A->C','C->D', 'D->A'];
export const run = () => {
    console.log("=================    Finding  ======================");
    console.log('vertices: ', vertices);
    console.log('edges: ', edges);
    const positiveWeight = finding(vertices, edges);
    console.log('Output: ', positiveWeight);
};
