import { Param } from './gama-param';
import { Output } from './output';

export class Simulation {

    id: number;
    sourcePath: string;
    finalStep: number;
    experiment: string;
    seed: number;

    params: Array<Param>;

    outputs: Array<Output>;

    constructor(id?: number, sourcePath?: string, finalStep?: number, experiment?: string, seed?: number) {
        this.id = id;
        this.sourcePath = sourcePath;
        this.finalStep = finalStep;
        this.experiment = experiment;
        this.seed = seed;
    }
}