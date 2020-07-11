import { Component, OnInit } from '@angular/core';
import { Family } from '../shared/model/family';
import { FamilyServiceService } from '../shared/family-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.sass']
})
export class AddFamilyComponent implements OnInit {
  
  newFamily:Family=new Family();
  family:Family[]
  constructor(private service:FamilyServiceService,private router:Router) { }

  ngOnInit() {
  }
  addFamily(family){
    this.service.postFamily(family).subscribe((data:{})=>{
      this.router.navigate(['/listFamily'])
    })
  }

}
