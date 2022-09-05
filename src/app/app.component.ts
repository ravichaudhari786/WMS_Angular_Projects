import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService } from '@core';
//import { ColDef } from 'ag-grid-community';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
} from 'devextreme-angular';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService) {}

  ngOnInit() {}

  
  ngAfterViewInit() {
    this.preloader.hide();
  }
  
}
