import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Simulation } from '../entity/simulation';

@Injectable({
    providedIn: 'root'
})
export class SimulationService {
    urlXmlFile = "/api/simulation";
    constructor(private http: HttpClient) { }

  createXmlFile(simulation: Simulation) {
    return this.http.post(`${this.urlXmlFile}/createFileXml`, simulation);
  }
}