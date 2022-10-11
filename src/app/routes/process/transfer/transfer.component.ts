import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  tab=0;
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  tabchange(event:any){
    this.tab=event;
  }
  onSubmit(formData:any){}
}
