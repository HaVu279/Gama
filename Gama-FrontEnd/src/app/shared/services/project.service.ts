import { Project } from './../entity/project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  urlProject = "/api/projects";

  constructor(private http: HttpClient) { }

  getProjectsByUserId(userId: Number): Observable<Array<Project>> {
    return this.http.get<Array<Project>>(`${this.urlProject}?userId=${userId}`);
  }

  getProjectById(id: Number): Observable<Project> {
    return this.http.get<Project>(`${this.urlProject}/${id}`)
  }

  /**
   * add new project
   * @param project new project need to add
   */
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.urlProject, project);
  }

  /**
   * edit project
   * @param project project need to edit
   */
  editProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.urlProject}/${project.id}`, project);
  }
  /**
   * delete project
   * @param project Project
   */
  deleteProject(id: Number): Observable<Project> {
    return this.http.delete<Project>(`${this.urlProject}/${id}`);
  }
}
