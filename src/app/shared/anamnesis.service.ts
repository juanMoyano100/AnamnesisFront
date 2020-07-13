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
  // url='http://localhost:8080/api/'
  url='https://anamnesisservice-1594626638740.azurewebsites.net/api/'

  getWorks(): Observable<any>{ //Metodo Get para obtener todas las anamnesis
    return this.httpclient.get(this.url+'anamnesis')
  }
  getAnamnesisById(id):Observable<Anamnesis>{//Metodo Get para obtener una anamnesis por su ID
    let params1= new HttpParams().set('id',id);
    return this.httpclient.get<Anamnesis>(this.url+'anamnesis',{params:params1})
  }
  getAnamnesisByPatientId(id_patient):Observable<Anamnesis>{ //Metodo Get para obtener todas las anamnesis de un paciente
    // let params1= new HttpParams().set('id_patient',id_patient);
    return this.httpclient.get<Anamnesis>(this.url+'anamnesis/patient/'+id_patient)
  }
  postAnamnesis(anamnesis:Anamnesis):Observable<any>{ //Metodo POST para guardar una anamnesis
    return this.httpclient.post(this.url+'anamnesis',anamnesis)
  }
}
