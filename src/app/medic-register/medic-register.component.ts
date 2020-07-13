import { Component, OnInit, Input } from '@angular/core';
import { Anamnesis } from '../shared/model/anamnesis';
import { RegistryAnamnesis } from '../shared/model/registry-anamnesis';
import { Medic } from '../shared/model/medic';

@Component({
  selector: 'app-medic-register',
  templateUrl: './medic-register.component.html',
  styleUrls: ['./medic-register.component.sass']
})
export class MedicRegisterComponent implements OnInit {
  @Input() newAnamnesis:Anamnesis
  medic:Medic = new Medic
  medics:Medic[]=[]
  registry:RegistryAnamnesis=new RegistryAnamnesis
  registries:RegistryAnamnesis[]=[]
  constructor() { }

  ngOnInit() {
    this.newAnamnesis.registryAnamneses=this.registries
  }
  addRegister(id){
    
    this.registry.id_medical_staff=this.medic.idPersona
    this.registries.push(this.registry)
    this.medics.push(this.medic)
    console.log(this.registries);
  }
  searchMedic(id){
   console.log(this.registry.id_medical_staff);
    this.medic.idPersona=1
    this.medic.nombre="Julio"
    this.medic.apellido="Alvarado"
    this.medic.cedula="01105930492"
    this.medic.email="julioalvarado@hotmail.com"
  }

}
