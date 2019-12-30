import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, Injector } from '@angular/core';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';
import { AlertModalService } from '../alert-modal.service';

@Component({
  selector: 'app-form-base',
  template: '<div></div>'
})
export abstract class  FormBaseComponent implements OnInit {

  public formulario: FormGroup;

  protected alertService: AlertModalService;

  constructor(injector: Injector) {
    this.alertService = injector.get(AlertModalService);
  }

  ngOnInit() {
  }

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      alert('Formulário não é válido!');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle.markAsDirty();
        controle.markAsTouched();
        if ( controle instanceof FormGroup || controle instanceof FormArray) {
          this.verificaValidacoesForm(controle);
        }
      });
  }

  formResetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return( !this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaRequired(campo: string) {
    return( !this.formulario.get(campo).hasError('required') &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      // return campoEmail.errors['email'] && campoEmail.touched;
      return campoEmail.errors.email && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  getCampo(campo: string): any {
    return this.formulario.get(campo);
  }

  handleError(msg: string) {
    this.alertService.showAlertDanger(msg);
  }

}
