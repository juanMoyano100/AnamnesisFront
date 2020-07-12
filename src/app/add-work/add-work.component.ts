import { Component, OnInit, Input } from '@angular/core';
import { Work } from '../shared/model/work';
import { WorkServiceService } from '../shared/work-service.service';
import { Router } from '@angular/router';
import { WorkHistory } from '../shared/model/work-history';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.sass']
})
 
export class AddWorkComponent implements OnInit {
  @Input() newWorkHistory:WorkHistory=new WorkHistory
  newWork:Work=new Work();
  constructor(private service:WorkServiceService,private router:Router) { }

  ngOnInit() {
    // this.newWorkHistory.work=new Work();
     this.newWorkHistory.work=this.newWork
  }
  addWork(work){
    console.log(this.newWorkHistory)
    alert("Trabajo añadido")
    // this.service.postWork(work).subscribe((data:{})=>{
    //   this.router.navigate(['/listWorks'])
    // })
  }
  

}
