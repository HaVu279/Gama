export class GamaFile {
    id: Number;
    name: string;
    content: string;
    path: string;
    projectId: Number;

    constructor(id?: Number, name?: string, content?: string, path?: string, projectId?: Number) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.path = path;
        this.projectId = projectId;
    }
}