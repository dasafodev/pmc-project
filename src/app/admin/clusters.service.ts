import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClustersService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<Object> {
    return this.http.get('https://pmcmachinelearning.herokuapp.com/grupos');
  }

}
