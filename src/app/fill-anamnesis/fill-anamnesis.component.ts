import { Component, OnInit } from '@angular/core';
import { Anamnesis } from '../shared/model/anamnesis';
import { PathologicalPersonalHistory } from '../shared/model/pathological-personal-history';
import { NoPathologicalPersonalHistory } from '../shared/model/no-pathological-personal-history';
import { HousingConditions } from '../shared/model/housing-conditions';
import { AnamnesisService } from '../shared/anamnesis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-anamnesis',
  templateUrl: './fill-anamnesis.component.html',
  styleUrls: ['./fill-anamnesis.component.sass']
})
export class FillAnamnesisComponent implements OnInit {
  pages = 1
  finalAnamnesis:Anamnesis=new Anamnesis
  
  constructor(private service:AnamnesisService,private router:Router) { }

  ngOnInit() {
    this.finalAnamnesis.pathological_personal_history= new PathologicalPersonalHistory();
    this.finalAnamnesis.no_pathological_personal_history=new NoPathologicalPersonalHistory;
    this.finalAnamnesis.housing_conditions =new  HousingConditions
  }

  onSave(){
    console.log(this.finalAnamnesis);
      this.service.postAnamnesis(this.finalAnamnesis).subscribe((data:{})=>{
        this.router.navigate(['/'])
      })
  }
}
