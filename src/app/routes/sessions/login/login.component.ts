import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '@core';
import { AuthService } from '@core/authentication/auth.service';
import { LocalStorageService } from '@shared';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isAuthenticate:boolean;
  warehouseList:any;
  FinantialYears:any;
  loading:any=false;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService,private token:TokenService,private store:LocalStorageService) {
    this.isAuthenticate=false;
  }

  isUserLoggedIn(){
    if(this.token.valid()){
      const currentUser=this.store.get("currentUser");
      if(currentUser){
        this.router.navigateByUrl('/dashboard');
      }
    }
    else{
      this.store.clear();
    }

  }

  ngOnInit() {
    this.isUserLoggedIn();
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember_me: [false],
    });
  }



  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('remember_me');
  }

  async login() {
    this.loading=true;
     await this.auth
      .login(this.username?.value, this.password?.value, this.rememberMe?.value)
      //.pipe(filter(authenticated => authenticated))
      .subscribe(data=>{
          if(data){
            this.isAuthenticate=true;

            if(data.warehouseList){
            this.warehouseList=data.warehouseList;
            this.FinantialYears=data.finantialYears;
            //console.log(data)
          }

            //this.router.navigate(['auth/register'], {queryParams:{warehouses:warehouselist}});
            //this.router.navigateByUrl('auth/register',warehouselist);
          }
          else{
            this.loading=false;
            const form = this.loginForm;

              form.controls.password.setErrors({
                remote: 'The provided username or password is incorrect.',
              });
              form.controls.username.setErrors({
                remote: '',
              });

          }
        },
        error=>{
          this.loading=false;
          console.error("Error: "+error.message);
          if (error.status === 422) {
            const form = this.loginForm;
            const errors = error.error.errors;
            Object.keys(errors).forEach(key => {
              form.get(key === 'username' ? 'username' : key)?.setErrors({
                remote: errors[key][0],
              });
            });
          }
        }
      );
  }
}
