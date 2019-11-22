import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EditButtonModalComponent } from './edit-button-modal/edit-button-modal.component';

@Component({
  selector: 'grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.css']
})
export class GridBaseComponent implements OnInit {
 
  public gridApi;
  private gridColumnApi;
  public frameworkComponents;
  public context;
  private defaultColumnDefs: any;
  public gridOptions = {
    rowHeight: 45
  };

  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  @Input('colDefs') columnDefs: any[];
  @Input('gRowData') rowData: any[];

  constructor() {

    this.context = { componentParent: this };
   }

  ngOnInit() {
    this.InitGrid();
    if(!this.frameworkComponents) {      
      this.frameworkComponents = {        
        editButtonModal: EditButtonModalComponent        
      };
    /*console.log(this.context);  
    console.log(this.frameworkComponents);*/
    }
  }

  InitGrid(){
    this.defaultColumnDefs = {
      comparator: this.customComparator     
    }  
  }

  onGridReady(params) {
    
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

  }

  customComparator(a,b) {
    if (typeof a === 'string') {      
      return a.localeCompare(b);
    } else {
      return (a > b ? 1 : (a < b ? -1 : 0));
    }
  }

  methodFromParent(cell) {
    this.change.emit(cell);
  }

  onModelUpdated($event){
    if(this.gridApi && this.gridApi.rowModel.rowsToDisplay.length == 0) {
      this.gridApi.showNoRowsOverlay();
    }
    if(this.gridApi && this.gridApi.rowModel.rowsToDisplay.length != 0) {
      this.gridApi.hideOverlay();
    }
  }

}
