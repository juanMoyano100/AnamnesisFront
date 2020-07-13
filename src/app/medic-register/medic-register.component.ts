import { Component, OnInit, Input } from '@angular/core';
import { Anamnesis } from '../shared/model/anamnesis';
import { RegistryAnamnesis } from '../shared/model/registry-anamnesis';

@Component({
  selector: 'app-medic-register',
  templateUrl: './medic-register.component.html',
  styleUrls: ['./medic-register.component.sass']
})
export class MedicRegisterComponent implements OnInit {
  @Input() newAnamnesis:Anamnesis
  registry:RegistryAnamnesis=new RegistryAnamnesis
  registries:RegistryAnamnesis[]=[]
  constructor() { }

  ngOnInit() {
    this.newAnamnesis.registryAnamneses=this.registries
  }
  addRegister(id){
    this.registries.push(this.registry)
    this.registry=new RegistryAnamnesis
    console.log(this.registries);
  }
  searchMedic(id){
   console.log(this.registry.id_medical_staff);
   
  }

}
