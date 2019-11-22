import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { UsuariosService } from './usuarios.service';
import { GridBaseComponent } from '../shared/grid-base/grid-base.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
  formulario: FormGroup;

  constructor(private usersService: UsuariosService,
              private formBuilder: FormBuilder,
              private router: Router) {  }  

  ngOnInit() {
    this.InitGrid();
    this.rowData = this.usersService.getUsers();
    this.InitForm();
  }

  InitForm() {
    this.formulario = this.formBuilder.group({
      id: [0, Validators.required],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      login: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  onSubmit(){

    let postObject = this.formulario

    if(this.formulario.valid){
      if(this.usersService.post(postObject)){
        alert("Registro Incluído com Sucesso!")
      } else {
        alert("Erro ao incluir Registro!")
      }      
    }

    //this.router.navigate(['/usuarios']);
    this.rowData = this.usersService.getUsers();
    //this.gridUsuarios.
    this.modalUsuario.closeModal();   
    
  }

  newRegister(){
    this.modalUsuario.showModal();
  }

  editFromGrid($event) {

    /*this.hideToggleAndCode = true;
    this.changeTitle(false);*/
    if ($event.isTrusted !== true) {
      this.getByCode($event);
    }
  }

  getByCode(id) {

    let usuario =  this.usersService.getUser(id);
    this.formulario.controls['id'].setValue(usuario.id);
    this.formulario.controls['nome'].setValue(usuario.nome);
    this.formulario.controls['login'].setValue(usuario.login);
    this.formulario.controls['email'].setValue(usuario.email);
    this.modalUsuario.showModal();
  }

  InitGrid(){
    this.columnDefs = [       
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
          cellRenderer: 'editButtonModal'
        }
    ];
  }

}
