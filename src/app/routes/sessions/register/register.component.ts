import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, TokenService } from '@core';
import { User } from '@core/authentication/interface';
import { LocalStorageService } from '@shared';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  selectedYear: number = 0;
  warehouse: number = 0;
  FinantialYears: any = [];
  isMultiWarehouses: boolean;
  warehouselist: any = [];

  @Input() warehouses: any;
  @Input() yearList: any;
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService,
    private store: LocalStorageService, private token: TokenService) {
    this.isMultiWarehouses = false;
    this.registerForm = this.fb.group({
      finantialYearId: ['', [Validators.required]],
      warehouseId: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    
    this.warehouselist = this.warehouses;
    this.FinantialYears = this.yearList;
    const currentUser: User = JSON.parse(this.store.get("currentUser"));
    this.selectedYear = this.yearList[0].FinancialYearID;
    this.warehouse = this.warehouses[0].WarehouseID//currentUser.warehouseId;
    
  }



  get finantialYearId() {
    return this.registerForm.get('finantialYearId');
  }

  get warehouseId() {
    return this.registerForm.get('warehouseId');
  }

  onSubmit() {
    const currentUser = JSON.parse(this.store.get("currentUser"));
    const token = this.store.get("token");
    currentUser.warehouseId = this.warehouseId?.value;
    currentUser.FinantialYearId = this.finantialYearId?.value;
    this.store.clear();
    this.store.set("currentUser", JSON.stringify(currentUser));
    this.token.save(token);
    this.router.navigateByUrl('/');
    //this.router.navigate(['/']);
    this.GetMyMenus(currentUser.userId);
    //console.log("register",currentUser)
  }
  GetMyMenus(UserIds: any) {
    this.api.get('/Menu/ComponetMenu?userid=' + UserIds).subscribe(
      data => {
        const MyMenus = data;
        this.store.set("ComponetMenu", JSON.stringify(MyMenus));
      },
      error => {
        console.error(error);
      });
  }
}
