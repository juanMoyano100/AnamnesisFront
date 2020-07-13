import { Injectable } from '@angular/core';
import { Symptom } from './model/symptom';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {
  symptom:Symptom=new Symptom()
  constructor(private httpclient:HttpClient) { }
  url="https://anamnesisservice-1594626638740.azurewebsites.net/api/"
  //url='http://localhost:8080/api/'
  
  getSymptom(): Observable<any>{
    return this.httpclient.get(this.url+'symptoms')
  }
  getSymptomById(idSymptom):Observable<Symptom>{
    let params1= new HttpParams().set('id_symptom',idSymptom)
    return this.httpclient.get<Symptom>(this.url+'symptoms',{params:params1})
  }
  getSymptomsByName(symptomName):Observable<any>{
    return this.httpclient.get(this.url+'symptoms/search/'+symptomName)
  }
  // postFamily(family:Family):Observable<any>{
  //   return this.httpclient.post(this.url+'symptoms',family)
  //   //console.log(JSON.stringify({student}))
  // }
}
