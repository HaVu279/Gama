export class Output {
    id: number;
    name: string;
    frameRate: number;

    constructor(id?: number, name?: string, frameRate?: number) {
        this.id = id;
        this.name = name;
        this.frameRate = frameRate;
    }
}