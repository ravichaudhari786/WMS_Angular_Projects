import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { LocalStorageService } from '@shared';
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
  PrintButtonDisplay: boolean = false;
  store: LocalStorageService;
  Mymenus:any;
  Menus: any;
  Counts: number = 0;
  agInit(params: any): void {
    this.testMethod();
    this.params = params;
    this.label = this.params.label || null;
  }
  testMethod() {
    if (this.Counts == 0) {
      
      this.Counts = this.Counts + 1;
      const currentSelectedMenu = JSON.parse(localStorage.getItem("SelectedMenu") || '[]');
      this.Menus = JSON.parse(currentSelectedMenu)
      //console.log("agInit", this.Menus)
      // console.log("agInit", this.Menus[0].Delete_flg)
      this.EditButtonDisplay = this.Menus[0].Edit_flg;
      this.DeleteButtonDisplay = this.Menus[0].Delete_flg;
      this.PrintButtonDisplay = this.Menus[0].Print_flg;
    }


  }
  refresh(params?: any): boolean {
    //this.dialog.alert("refresh")
    return true;
  }

  onClick($event: any, action: string) {
    //this.dialog.alert("onClick")
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