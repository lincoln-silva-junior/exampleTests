import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.css']
})
export class GridBaseComponent implements OnInit {

  @Input('colDefs') columnDefs: any[];
  @Input('gRowData') rowData: any[];

  constructor() { }

  ngOnInit() {

  }

}
