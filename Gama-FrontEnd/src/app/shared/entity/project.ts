export class Project {
    id: Number;
    name: string;
    createAt: string;
    description: string;

    constructor(id?: Number, name?: string, createAt?: string, description?: string) {
        this.id = id;
        this.name = name;
        this.createAt = createAt;
        this.description = description;
    }
}