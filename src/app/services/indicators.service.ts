import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  configUrl = 'https://mindicador.cl/api';

  constructor(private http: HttpClient) { }

  getAllIndicators(){

    return this.http.get(this.configUrl);
  }

  getIndicatorByType(type){
    return this.http.get(this.configUrl + '/' + type).toPromise();
  }

}
