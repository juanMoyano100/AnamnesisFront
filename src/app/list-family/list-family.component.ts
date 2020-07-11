import { Component, OnInit } from '@angular/core';
import { Family } from '../shared/model/family';
import { FamilyServiceService } from '../shared/family-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-family',
  templateUrl: './list-family.component.html',
  styleUrls: ['./list-family.component.sass']
})
export class ListFamilyComponent implements OnInit {

  family:Family[]
  constructor(private service:FamilyServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getFamily().subscribe((data:any)=>{this.family = data})
  }
}
