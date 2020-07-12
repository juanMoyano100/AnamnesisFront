import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../shared/model/patient';
import { AnamnesisService } from '../shared/anamnesis.service';
import { Anamnesis } from '../shared/model/anamnesis';
import { PhysicExam } from '../shared/model/physic-exam';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.sass']
})

export class PersonalDataComponent{
  patient:Patient = new Patient
  @Input() newAnamnesis:Anamnesis
  physicExam:PhysicExam=new PhysicExam
  value=false
  constructor(private anamnesisService:AnamnesisService) { }
  patientAnamnesis:Anamnesis[]
  date=new Date()
  ngOnInit() {
  }
  
  seachPatient(cedula){
    this.value=true;
    this.patient.id=1
    this.patient.cedula="0103857229",
    this.patient.nombre= "Villie Morocho"
    this.patient.direccion= "Av 12 de abril"
    this.patient.telefono= "2883743"
    this.patient.fecha_nacimiento="1997-12-21"
    this.patient.nacionalidad="Ecuatoriana"
    this.newAnamnesis.id_patient=this.patient.id
    this.seachAnamnesis(this.patient.id)    
    this.searchExamen(this.patient.id)
  }
  // this.service.getFamily().subscribe((data:any)=>{this.family = data})
  seachAnamnesis(idPatient){
    this.anamnesisService.getAnamnesisByPatientId(idPatient).subscribe((data:any)=>this.patientAnamnesis = data)
  }
  searchExamen(idPatient){
    this.physicExam.id=1
    this.physicExam.paciente=idPatient;
    this.physicExam.caso="Caso nuevo"
    this.physicExam.precio="50"
    this.physicExam.fecha=this.date
    this.newAnamnesis.id_physical_exam=this.physicExam.id
  }

}
