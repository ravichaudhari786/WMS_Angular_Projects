import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-inward-action-button',
  templateUrl: './inward-action-button.component.html',
  styleUrls: ['./inward-action-button.component.scss']
})
export class InwardActionButtonComponent implements ICellRendererAngularComp {

  params: any;
  label: string = '';
  EditButtonDisplay: boolean = false;
  DeleteButtonDisplay: boolean = false;
  
  Menus: any;
  Counts: number = 0;
  agInit(params: any): void {
    this.testMethod();
    this.params = params;
    this.label = this.params.label || null;
    console.log("SelectedMenu",localStorage.getItem("SelectedMenu"))
  }
  testMethod() {
    if (this.Counts == 0) {
      this.Counts = this.Counts + 1;
      const currentSelectedMenu = JSON.parse(localStorage.getItem("SelectedMenu") || '[]');
      this.Menus = JSON.parse(currentSelectedMenu)
      console.log("agInit", this.Menus[0].Edit_flg)
      console.log("agInit", this.Menus[0].Delete_flg)
      this.EditButtonDisplay = this.Menus[0].Edit_flg;
      this.DeleteButtonDisplay = this.Menus[0].Delete_flg;
    }


  }
  refresh(params?: any): boolean {
    alert("refresh")
    return true;
  }

  onClick($event: any, action: string) {
    //alert("onClick")
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        actions: action,
        // ...something
      }
      this.params.onClick(params);

    }
  }
}