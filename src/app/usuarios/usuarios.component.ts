import { Observable, pipe } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { UsuariosService } from '../services/usuarios.service';
import { GridBaseComponent } from '../shared/grid-base/grid-base.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBaseComponent } from '../shared/form-base/form-base.component';
import { User } from '../model/user';
import { take, delay } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent extends FormBaseComponent implements OnInit {

  @ViewChild('modalUsuario', {static: false}) modalUsuario: ModalComponent;
  @ViewChild('gridUsuarios', {static: false}) gridUsuarios: GridBaseComponent;
  public columnDefs: any[];
  // public rowData: Observable<User[]>;
   public rowData: any[];
  // formulario: FormGroup;

  constructor(private usersService: UsuariosService,
              private formBuilder: FormBuilder,
              private router: Router) {
                super();
               }

  ngOnInit() {
    this.InitGrid();
    // this.rowData = this.usersService.list();
    this.usersService.list().subscribe(users => {
      this.rowData = users;
    });
    this.InitForm();
  }

  InitForm() {
    this.formulario = this.formBuilder.group({
      id: [null, null],
      nome: [null, [Validators.required,  Validators.minLength(3), Validators.maxLength(50)]],
      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  submit() {
    const postObject = this.formulario.value;

    this.usersService.save(postObject).subscribe(
      // success => alert('Sucesso'),
      success => this.clearForm(),
      error => alert(error),
      () => console.log('Request Completo')
    );

    /*if (this.formulario.controls.id.value == null) {
      if (this.usersService.save(postObject)) {
        alert('Registro Incluído com Sucesso!');
      } else {
        alert('Erro ao Incluir Registro!');
      }
    } else {
      if (this.usersService.save(postObject)) {
        alert('Registro Alterado com Sucesso!');
      } else {
        alert('Erro ao Alterar Registro!');
      }
    }*/
    // this.clearForm();
  }

  newRegister() {
    this.clearForm();
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

    /*const usuario =  this.usersService.listByID(parseInt(id, 10));
    this.formulario.controls.id.setValue(usuario.id);
    this.formulario.controls.nome.setValue(usuario.nome);
    this.formulario.controls.login.setValue(usuario.login);
    this.formulario.controls.email.setValue(usuario.email);*/
    this.usersService.listByID(parseInt(id, 10)).subscribe((data: any) => {
      this.formulario.controls.id.setValue(data.id);
      this.formulario.controls.nome.setValue(data.nome);
      this.formulario.controls.login.setValue(data.login);
      this.formulario.controls.email.setValue(data.email);
    },
    error => console.error(error),
    () => console.log('Request Completo'));

    this.modalUsuario.showModal();
  }

  InitGrid() {
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

  clearForm() {

    alert('Sucesso');

    this.formulario.reset();

    this.usersService.list().subscribe((data: any) => {
      this.rowData = data;
      this.gridUsuarios.gridApi.setRowData(this.rowData);
    },
    error => console.error(error),
    () => console.log('Request Completo'));

    this.modalUsuario.closeModal();
  }

}
