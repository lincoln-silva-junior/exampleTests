import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
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


  constructor(private homeService: HomeService) { 

    this.columnDefs = [
      { headerName: 'Id', field: 'id', sortable:true, filter:true, width: 70,
      minWidth: 60,
      maxWidth: 80},
      { headerName: 'Nome', field: 'nome', sortable:true, filter:true },
      { headerName: 'Login', field: 'login', sortable:true, filter:true },
      { headerName: 'Email', field: 'email', sortable:true, filter:true }
    ];    

  }

  ngOnInit() {

    this.rowData = this.homeService.getUsers();

  }

  CreateGrid (){
  
  }

}
