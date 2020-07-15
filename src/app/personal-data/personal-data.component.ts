import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../shared/model/patient';
import { AnamnesisService } from '../shared/anamnesis.service';
import { Anamnesis } from '../shared/model/anamnesis';
import { PhysicExam } from '../shared/model/physic-exam';
import { NoPathologicalPersonalHistory } from '../shared/model/no-pathological-personal-history';
import { PatientService } from '../shared/patient.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.sass']
})

export class PersonalDataComponent {
  patient: Patient = new Patient
  @Input() newAnamnesis: Anamnesis
  physicExam: PhysicExam = new PhysicExam
  value = false
  constructor(private anamnesisService: AnamnesisService, private patientService: PatientService,private modalService: NgbModal) { }
  patientAnamnesis: Anamnesis[]
  date = new Date()
  cedula: number
  anamnesisCharged:Anamnesis=new Anamnesis
  ngOnInit() {
  }

  seachPatient(cedula) {
    console.log(this.cedula)
    // this.patientService.getPatientByid(cedula).subscribe((data:any)=>{this.patient = data})
    this.patientService.getPatientByCedula(cedula).subscribe((data: any) => { this.patient = data })
    this.value = true;
    // this.patient.id = 23
    // this.patient.cedula = "0105667784"
    // this.patient.nombre = "Marco Calle"
    // this.patient.direccion = "Av Solano"
    // this.patient.telefono = "2883743"
    // this.patient.fecha_nacimiento = "1982-11-11"
    // this.patient.nacionalidad = "Ecuatoriana"
    this.patient.id = this.cedula
    this.newAnamnesis.id_patient = this.patient.id
    this.seachAnamnesis(this.patient.id)
    this.searchExamen(this.patient.id)
  }
  // this.service.getFamily().subscribe((data:any)=>{this.family = data})
  seachAnamnesis(idPatient) {
    this.anamnesisService.getAnamnesisByPatientId(idPatient).subscribe((data: any) => this.patientAnamnesis = data)
  }

  searchExamen(idPatient) {
    this.physicExam.id = 1
    this.physicExam.paciente = idPatient;
    this.physicExam.caso = "Caso nuevo"
    this.physicExam.precio = "50"
    this.physicExam.fecha = this.date
    // this.newAnamnesis.id_physical_exam = this.physicExam.id
  }
  addExam() {
    this.newAnamnesis.id_physical_exam = this.physicExam.id
    // this.physicExam.paciente = idPatient;
  }
  copy(anamnesis: Anamnesis) {
    console.log(anamnesis);
    this.newAnamnesis.no_pathological_personal_history = { ...anamnesis.no_pathological_personal_history, id: undefined }
    this.newAnamnesis.pathological_personal_history = { ...anamnesis.pathological_personal_history, id: undefined }
    this.newAnamnesis.housing_conditions = { ...anamnesis.housing_conditions, id: undefined }
    this.newAnamnesis.familyHistoryList = anamnesis.familyHistoryList.map(e => { return { ...e, id_family_history: undefined, anamnesis: { ...e.anamnesis, id: undefined } } })
    this.newAnamnesis.workHistoryList = anamnesis.workHistoryList.map(e => { return { ...e, id: undefined, anamnesis: { ...e.anamnesis, id: undefined } } })

    // console.log(this.newAnamnesis);
  }
  title = 'appBootstrap';

  closeResult: string;

  showDetails(content:Anamnesis) {
    this.anamnesisCharged=content
    console.log(this.anamnesisCharged)
    // this.workHistory = new WorkHistory;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // this.worksHistories.push(this.workHistory)
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      // this.worksHistories.push(this.workHistory)
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';

    });
  }

}
