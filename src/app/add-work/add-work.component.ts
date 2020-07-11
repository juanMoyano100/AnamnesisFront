import { Component, OnInit } from '@angular/core';
import { Work } from '../shared/model/work';
import { WorkServiceService } from '../shared/work-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.sass']
})
 
export class AddWorkComponent implements OnInit {
  newWork:Work=new Work();
  works:Work[]
  constructor(private service:WorkServiceService,private router:Router) { }

  ngOnInit() {
  }
  addWork(work){
    this.service.postWork(work).subscribe((data:{})=>{
      this.router.navigate(['/listWorks'])
    })
  }

}
