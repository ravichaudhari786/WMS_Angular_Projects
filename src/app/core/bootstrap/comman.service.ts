import { Injectable } from '@angular/core';
import { ApiService } from '@core';
import { map } from 'rxjs/operators';

@Injectable()
export class CommanService {

  private list:any;

  constructor(private api:ApiService){
    this.list=[];
  }

   getItemList(){
     this.api.get("/item/itemlist")
    .subscribe((data) =>{
      this.list = data;
    },error => console.error(error));
     return this.list;
  }

}
