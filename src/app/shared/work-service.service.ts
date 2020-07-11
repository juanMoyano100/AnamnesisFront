import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from './model/work';

@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {
  work:Work = new Work()
  constructor(private httpclient:HttpClient) { }
  url='http://localhost:8080/api/'
  //GET GetWorks
  getWorks(): Observable<any>{
    return this.httpclient.get(this.url+'work')
  }
  getWorkById():Observable<Work>{
    let params1= new HttpParams().set('id','1')
    return this.httpclient.get<Work>(this.url+'work',{params:params1})
  }
  postWork(work:Work):Observable<any>{
    return this.httpclient.post(this.url+'work',work)
    //console.log(JSON.stringify({student}))
  }
}
