import { Injectable } from '@angular/core';
import { Family } from './model/family';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyServiceService {

  family:Family = new Family()
  constructor(private httpclient:HttpClient) { }
  url='http://localhost:8080/api/'
  //GET GetFamily
  getFamily(): Observable<any>{
    return this.httpclient.get(this.url+'family')
  }
  getFamilyById():Observable<Family>{
    let params1= new HttpParams().set('id','1')
    return this.httpclient.get<Family>(this.url+'family',{params:params1})
  }
  postFamily(family:Family):Observable<any>{
    return this.httpclient.post(this.url+'family',family)
    //console.log(JSON.stringify({student}))
  }
}
