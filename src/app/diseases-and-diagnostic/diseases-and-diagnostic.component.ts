import { Component, OnInit, Input } from '@angular/core';
import { Anamnesis } from '../shared/model/anamnesis';

@Component({
  selector: 'app-diseases-and-diagnostic',
  templateUrl: './diseases-and-diagnostic.component.html',
  styleUrls: ['./diseases-and-diagnostic.component.sass']
})
export class DiseasesAndDiagnosticComponent implements OnInit {
  @Input() newAnamnesis:Anamnesis
  constructor() { }

  ngOnInit() {
  }

}
