import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'edit-button-modal',
  templateUrl: './edit-button-modal.component.html',
  styleUrls: ['./edit-button-modal.component.css']
})
export class EditButtonModalComponent implements ICellRendererAngularComp {
  public params: any;
  public idValue: any;

  constructor() { }

  agInit(params: any): void {
    this.params = this.params.value;
    this.idValue = this.params.value;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(`${this.params.value}`)
  }

  refresh(): boolean{
    return false;
  }

}
