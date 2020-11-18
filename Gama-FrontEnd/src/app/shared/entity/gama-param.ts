export class Param {
    id: Number;
    name: string;
    type: string;
    value: string;
    typeName: string;
    fileId: Number;

    constructor(name?: string, type?: string, value?: string) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}