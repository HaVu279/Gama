import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamaFile } from '../entity/gama-file';
import { Param } from '../entity/gama-param';
@Injectable({
  providedIn: 'root'
})
export class GamaParamService {

  urlGamaParam = "/api/gama-params";

  constructor(private http: HttpClient) { }

  /**
   * get param of file by file id
   * @param fileId 
   */
  getGamaParamsByFileId(fileId: Number): Observable<Array<Param>> {
    return this.http.get<Array<Param>>(`${this.urlGamaParam}?fileId=${fileId}`);
  }

  /**
   * add new gama file
   * @param Param new gama param need to add
   */
  addParam(param: Param): Observable<Param> {
    return this.http.post<Param>(this.urlGamaParam, param);
  }

  /**
   * edit gama file
   * @param Param new gama param need to add
   */
  editParams(params: Array<Param>): Observable<Array<Param>> {
    return this.http.put<Array<Param>>(this.urlGamaParam, params);
  }

}
