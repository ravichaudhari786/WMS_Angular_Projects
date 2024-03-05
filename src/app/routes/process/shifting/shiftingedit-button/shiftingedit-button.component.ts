import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-shiftingedit-button',
  templateUrl: './shiftingedit-button.component.html',
  styleUrls: ['./shiftingedit-button.component.scss']
})
export class ShiftingeditButtonComponent implements ICellRendererAngularComp {

  params:any;
  label: string='';

  agInit(params:any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event:any,action:string) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        actions:action,
        // ...something
      }
      this.params.onClick(params);

    }
  }
}
