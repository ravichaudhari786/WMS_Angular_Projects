import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-departmentmastereditbutton',
  templateUrl: './departmentmastereditbutton.component.html',
  styleUrls: ['./departmentmastereditbutton.component.scss']
})
export class DepartmentmastereditbuttonComponent implements ICellRendererAngularComp {

  params:any;
  label: string='';

  agInit(params:any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event:any) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
}