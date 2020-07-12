import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../shared/model/family';
import { FamilyServiceService } from '../shared/family-service.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Anamnesis } from '../shared/model/anamnesis';

@Component({
  selector: 'app-list-family',
  templateUrl: './list-family.component.html',
  styleUrls: ['./list-family.component.sass']
})
export class ListFamilyComponent implements OnInit {
  @Input() newAnamnesis:Anamnesis
  
  family:Family[]
  constructor(private service:FamilyServiceService,private router:Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getFamily().subscribe((data:any)=>{this.family = data})
  }
  title = 'appBootstrap';
  
  closeResult: string;
    
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  'with: ${reason}';
  //   }
  // }

}
