import { Injectable } from '@angular/core';
import { Anamnesis } from './model/anamnesis';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisService {
  
  work:Anamnesis = new Anamnesis()
  constructor(private httpclient:HttpClient) { }
  url='http://localhost:8080/api/'
  //GET GetWorks
  // getWorks(): Observable<any>{
  //   return this.httpclient.get(this.url+'work')
  // }
  getAnamnesisById(id):Observable<Anamnesis>{
    let params1= new HttpParams().set('id',id);
    return this.httpclient.get<Anamnesis>(this.url+'anamnesis',{params:params1})
  }
  getAnamnesisByPatientId(id_patient):Observable<Anamnesis>{
    let params1= new HttpParams().set('id_patient',id_patient);
    return this.httpclient.get<Anamnesis>(this.url+'anamnesis',{params:params1})
  }
  postAnamnesis(anamnesis:Anamnesis):Observable<any>{
    return this.httpclient.post(this.url+'anamnesis',anamnesis)
    //console.log(JSON.stringify({student}))
  }


}
