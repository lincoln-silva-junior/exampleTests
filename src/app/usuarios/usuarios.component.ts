import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { UsuariosService } from './usuarios.service';
import { GridBaseComponent } from '../shared/grid-base/grid-base.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @ViewChild('modalUsuario', {static: false}) modalUsuario: ModalComponent;
  @ViewChild("gridUsuarios", {static: false}) gridUsuarios: GridBaseComponent;
  public columnDefs: any[];
  public rowData: any[];

  constructor(private usersService: UsuariosService) {
    this.columnDefs = [
        /*{ headerName: 'Id', field: 'id', sortable:true, filter:true, width: 70,
        minWidth: 60,
        maxWidth: 80},*/
        { headerName: 'Nome', field: 'nome'},
        { headerName: 'Login', field: 'login'},
        { headerName: 'Email', field: 'email'},
        {
          headerName: 'Ações',
          field: 'id',          
          colId: 'params',
          width: 150,
          suppressFilter: true,
          suppressSorting: true,
          cellRenderer: 'editButtonModal',
        }
        

    ];
   }

  ngOnInit() {
    this.rowData = this.usersService.getUsers();
  }

}
