import { Component, OnInit, Input } from '@angular/core';
import { Anamnesis } from '../shared/model/anamnesis';

@Component({
  selector: 'app-medic-register',
  templateUrl: './medic-register.component.html',
  styleUrls: ['./medic-register.component.sass']
})
export class MedicRegisterComponent implements OnInit {
  @Input() newAnamnesis:Anamnesis
  constructor() { }

  ngOnInit() {
  }

}
