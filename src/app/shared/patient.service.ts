import { Injectable } from '@angular/core';
import { Patient } from './model/patient';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url="https://turno-paciente.herokuapp.com/api/"
  constructor(private httpclient:HttpClient) { }
  getPatientByCedula(cedula):Observable<Patient>{ //Metodo Get para obtener todas las anamnesis de un paciente
    // let params1= new HttpParams().set('cedula',cedula);
    // console.log(cedula)
    return this.httpclient.get<Patient>(this.url+'/paciente/'+cedula)
  }
  getPatientByid(idPatient):Observable<Patient>{ //Metodo Get para obtener todas las anamnesis de un paciente
    // let params1= new HttpParams().set('cedula',cedula);
    return this.httpclient.get<Patient>(this.url+'/paciente/'+idPatient)
  }

}
