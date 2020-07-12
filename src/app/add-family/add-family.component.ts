import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../shared/model/family';
import { FamilyServiceService } from '../shared/family-service.service';
import { Router } from '@angular/router';
import { FamilyHistory } from '../shared/model/family-history';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.sass']
})
export class AddFamilyComponent implements OnInit {
  
  @Input() newFamilyHistory:FamilyHistory=new FamilyHistory();
  newFamily:Family=new Family
  constructor(private service:FamilyServiceService,private router:Router) { }

  ngOnInit() {
    this.newFamilyHistory.family=this.newFamily
  }
  addFamily(family){
    console.log(this.newFamily)
    alert("Familiar Añadido")
    // this.service.postFamily(family).subscribe((data:{})=>{
    //   this.router.navigate(['/listFamily'])
    // })
  }

}
