import { Component, OnInit, Input } from '@angular/core';
import { Anamnesis } from '../shared/model/anamnesis';
import { SymptomService } from '../shared/symptom.service';
import { Symptom } from '../shared/model/symptom';
import { Disease } from '../shared/model/disease';
import { DiseaseService } from '../shared/disease.service';
import { PatientSymptom } from '../shared/model/patient-symptom';
import { PresuntiveDiagnostic } from '../shared/model/presuntive-diagnostic';

@Component({
  selector: 'app-diseases-and-diagnostic',
  templateUrl: './diseases-and-diagnostic.component.html',
  styleUrls: ['./diseases-and-diagnostic.component.sass']
})
export class DiseasesAndDiagnosticComponent implements OnInit {
  @Input() newAnamnesis: Anamnesis
  patientSymptoms: PatientSymptom[] = []
  presuntiveDiagnostics: PresuntiveDiagnostic[] = []
  constructor(private symptomService: SymptomService, private diseaseService: DiseaseService) { }
  symptom: Symptom = new Symptom()
  symptoms: Symptom[] = new Array
  disease: Disease = new Disease()
  diseases: Disease[] = new Array
  value = false
  ngOnInit() {
    this.symptomService.getSymptom().subscribe((data: any) => { this.symptoms = data })
    this.diseaseService.getDisease().subscribe((data: any) => {
      this.diseases = data.map(element => {
        return { ...element, obs: "", value: false }
      });
    })
    this.newAnamnesis.patientSymptomList = this.patientSymptoms
    this.newAnamnesis.presumptiveDiagnosticList = this.presuntiveDiagnostics
  }

  addSymptom(symptom) {
    const patientSymptom: PatientSymptom = new PatientSymptom
    patientSymptom.symptom = symptom
    this.patientSymptoms.find(e => e.symptom.id_symptom == symptom.id_symptom) == undefined ?
      this.patientSymptoms.push(patientSymptom) :
      false
    console.log(this.patientSymptoms)
  }

  addDisease(disease) {
    const presuntiveDiagnostic: PresuntiveDiagnostic = new PresuntiveDiagnostic
    presuntiveDiagnostic.diagnostic = disease.obs == "" ? disease.disease : disease.obs
    const auxDisease = {...disease}
    delete auxDisease.obs
    delete auxDisease.value
    presuntiveDiagnostic.disease = auxDisease
    this.presuntiveDiagnostics.find(e => e.disease.id_disease == auxDisease.id_disease) == undefined ?
      this.presuntiveDiagnostics.push(presuntiveDiagnostic) :
      false
    console.log(this.presuntiveDiagnostics)
  }
}
