import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medic } from './model/medic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicService {
  url="https://hospitalizacion.herokuapp.com/api/"
  constructor(private httpclient:HttpClient) { }

  getMedicByCedula(cedula):Observable<Medic>{ //Metodo Get para obtener todas las anamnesis de un paciente
    // let params1= new HttpParams().set('cedula',cedula);
    // console.log(cedula)
    return this.httpclient.get<Medic>(this.url+'medico/'+cedula)
  }
  // getPatientByid(idPatient):Observable<Patient>{ //Metodo Get para obtener todas las anamnesis de un paciente
  //   // let params1= new HttpParams().set('cedula',cedula);
  //   return this.httpclient.get<Patient>(this.url+'/paciente/'+idPatient)
  // }

}
