import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamaFile } from '../entity/gama-file';
@Injectable({
  providedIn: 'root'
})
export class GamaFileService {

  urlGamaFile = "/api/gama-files";

  constructor(private http: HttpClient) { }

  getGamaFilesByProjectId(projectId: Number): Observable<Array<GamaFile>> {
    return this.http.get<Array<GamaFile>>(`${this.urlGamaFile}?projectId=${projectId}`);
  }

  getGamaFileById(id: Number): Observable<GamaFile> {
    return this.http.get<GamaFile>(`${this.urlGamaFile}/${id}`)
  }

  /**
   * add new gama file
   * @param gamaFile new gama file need to add
   */
  addGamaFile(gamaFile: GamaFile): Observable<GamaFile> {
    return this.http.post<GamaFile>(this.urlGamaFile, gamaFile);
  }

  /**
   * edit gama file
   * @param gamaFile new gama file need to add
   */
  editGamaFile(gamaFile: GamaFile): Observable<GamaFile> {
    return this.http.put<GamaFile>(this.urlGamaFile, gamaFile);
  }

  /**
   * delete project
   * @param project Project
   */
  deleteGamaFile(id: Number): Observable<GamaFile> {
    return this.http.delete<GamaFile>(`${this.urlGamaFile}/${id}`);
  }
}
