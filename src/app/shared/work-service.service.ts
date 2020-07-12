import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from './model/work';
import { WorkHistory } from './model/work-history';

@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {
  workHisory:WorkHistory = new WorkHistory
  constructor(private httpclient:HttpClient) { }
  url='http://localhost:8080/api/'
  //GET GetWorks
  getWorks(): Observable<any>{
    return this.httpclient.get(this.url+'workhistory')
  }
  getWorkById():Observable<WorkHistory>{
    let params1= new HttpParams().set('id','1')
    return this.httpclient.get<WorkHistory>(this.url+'workhistory',{params:params1})
  }
  postWork(work:Work):Observable<any>{
    return this.httpclient.post(this.url+'workhistory',work)
    //console.log(JSON.stringify({student}))
  }
}
