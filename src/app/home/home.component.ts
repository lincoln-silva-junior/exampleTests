import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { Observable } from 'rxjs';
//import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('modalUsuario', {static: false}) modalUsuario: ModalComponent;
  public columnDefs: any[];
  public rowData: any[];  


  constructor() {    

  }

  ngOnInit() {   

  }

  CreateGrid (){
  
  }

}
