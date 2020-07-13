import { Component, OnInit, Input } from '@angular/core';
import { PathologicalPersonalHistory } from '../shared/model/pathological-personal-history';
import { NoPathologicalPersonalHistory } from '../shared/model/no-pathological-personal-history';
import { HousingConditions } from '../shared/model/housing-conditions';
import { Anamnesis } from '../shared/model/anamnesis';

@Component({
  selector: 'app-personal-history',
  templateUrl: './personal-history.component.html',
  styleUrls: ['./personal-history.component.sass']
})
export class PersonalHistoryComponent implements OnInit {
  @Input() newAnamnesis:Anamnesis
  
  pathologicalHistory:PathologicalPersonalHistory;
  noPathologicalHistory:NoPathologicalPersonalHistory
  housingCondition:HousingConditions
  constructor() { }
  
  
  ngOnInit() {
    console.log(this.newAnamnesis);
    
    this.pathologicalHistory=this.newAnamnesis.pathological_personal_history
    this.noPathologicalHistory=this.newAnamnesis.no_pathological_personal_history
    this.housingCondition=this.newAnamnesis.housing_conditions
    this.housingCondition.water_access=true
  }

}
