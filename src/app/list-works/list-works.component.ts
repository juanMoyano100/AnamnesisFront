import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkServiceService } from '../shared/work-service.service';
import { Work } from '../shared/model/work';

@Component({
  selector: 'app-list-works',
  templateUrl: './list-works.component.html',
  styleUrls: ['./list-works.component.sass']
})
export class ListWorksComponent implements OnInit {
  works:Work[]
  constructor(private service:WorkServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getWorks().subscribe((data:any)=>{this.works = data})
  }

}
