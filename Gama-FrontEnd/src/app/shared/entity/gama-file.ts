export class GamaFile {
    id: Number;
    name: string;
    path: string;
    projectId: Number;
    content: string;

    constructor(id?: Number, name?: string, path?: string, projectId?: Number) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.projectId = projectId;
    }
}