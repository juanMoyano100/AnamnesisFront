import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkServiceService } from '../shared/work-service.service';
import { Work } from '../shared/model/work';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Anamnesis } from '../shared/model/anamnesis';
import { WorkHistory } from '../shared/model/work-history';

@Component({
  selector: 'app-list-works',
  templateUrl: './list-works.component.html',
  styleUrls: ['./list-works.component.sass']
})
export class ListWorksComponent implements OnInit {
  work:Work
  works:Work[]
  worksHistories:WorkHistory[]
  workHistory:WorkHistory=new WorkHistory;

  @Input() newAnamnesis:Anamnesis
  
  constructor(private service:WorkServiceService,private router:Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.worksHistories=this.newAnamnesis.workHistoryList
    // this.service.getWorks().subscribe((data:any)=>{this.works = data})
  }
  title = 'appBootstrap';
  
  closeResult: string;
    
  open(content) {
    console.log(this.worksHistories)
    this.workHistory=new WorkHistory;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.worksHistories.push(this.workHistory)
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
      
    });
  }

}
