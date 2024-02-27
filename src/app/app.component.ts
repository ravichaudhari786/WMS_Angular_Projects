import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService } from '@core';
//import { ColDef } from 'ag-grid-community';
import { ViewEncapsulation } from '@angular/core';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService) {}

  ngOnInit() {
    
  }

  
  ngAfterViewInit() {
    this.preloader.hide();
  }
  
}
