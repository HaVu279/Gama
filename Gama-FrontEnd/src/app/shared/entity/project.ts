export class Project {
    id: Number;
    name: string;
    createAt: string;
    description: string;
    userId: Number;

    constructor(id?: Number, name?: string, createAt?: string, description?: string, userId?: Number) {
        this.id = id;
        this.name = name;
        this.createAt = createAt;
        this.description = description;
        this.userId = userId;
    }
}