import { Injectable } from '@angular/core';
import { Disease } from './model/disease';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  disease:Disease=new Disease()
  constructor(private httpclient:HttpClient) { }
  url="https://anamnesisservice-1594626638740.azurewebsites.net/api/"
  //url='http://localhost:8080/api/'
  
  getDisease(): Observable<any>{
    return this.httpclient.get(this.url+'disease')
  }
  getDiseaseById():Observable<Disease>{
    let params1= new HttpParams().set('id','1')
    return this.httpclient.get<Disease>(this.url+'disease',{params:params1})
  }
  getDiseasesByName(diseaseName):Observable<any>{
    return this.httpclient.get(this.url+'disease/search/'+diseaseName)
  }
}
