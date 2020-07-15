import { Component, OnInit, Input } from '@angular/core';
import { Anamnesis } from '../shared/model/anamnesis';
import { AnamnesisService } from '../shared/anamnesis.service';
import { PathologicalPersonalHistory } from '../shared/model/pathological-personal-history';
import { NoPathologicalPersonalHistory } from '../shared/model/no-pathological-personal-history';
import { HousingConditions } from '../shared/model/housing-conditions';

@Component({
  selector: 'app-list-anamesis',
  templateUrl: './list-anamesis.component.html',
  styleUrls: ['./list-anamesis.component.sass']
})
export class ListAnamesisComponent implements OnInit {
  @Input() newAnamnesis:Anamnesis
  value = false
  patientAnamnesis: Anamnesis[]
  date = new Date()
  cedula:number
  
  constructor(private anamnesisService:AnamnesisService) { }

  ngOnInit() {
    this.newAnamnesis=new Anamnesis
    this.newAnamnesis.pathological_personal_history=new PathologicalPersonalHistory
    this.newAnamnesis.no_pathological_personal_history=new NoPathologicalPersonalHistory
    this.newAnamnesis.housing_conditions=new HousingConditions
  }
  seachPatient(cedula) {
    console.log(this.cedula)
    // this.patientService.getPatientByid(cedula).subscribe((data:any)=>{this.patient = data})
    // this.patientService.getPatientByCedula(cedula).subscribe((data:any)=>{this.patient = data})
    this.value = true;
    // this.patient.id = 23
    // this.patient.cedula = "0105667784"
    // this.patient.nombre = "Marco Calle"
    // this.patient.direccion = "Av Solano"
    // this.patient.telefono = "2883743"
    // this.patient.fecha_nacimiento = "1982-11-11"
    // this.patient.nacionalidad = "Ecuatoriana"
    // this.patient.id=this.cedula
    // this.newAnamnesis.id_patient = this.patient.id
    this.seachAnamnesis(cedula)
    // this.searchExamen(this.patient.id)
  }

  seachAnamnesis(idPatient) {
    this.anamnesisService.getAnamnesisByPatientId(idPatient).subscribe((data: any) => this.patientAnamnesis = data)
  }
  search(anamnesis){
    this.newAnamnesis=anamnesis
  }

}
