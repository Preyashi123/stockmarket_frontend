import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User }  from './../classes/user';
import { UserServiceService }  from './../user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  signuppage:boolean=true;
  user: User;
  result : string;
  success: boolean;
  processend: boolean = false;

  constructor(private loginserviceService: LoginserviceService,
    private router: Router,
    private  userService: UserServiceService){

      this.user= new User();
  }

  async onSubmit(){
    let res;
   res= await this.userService.addUser (this.user.userName,this.user.password,this.user.email);
   if(res == null){
     this.signuppage=false;
     this.processend=true;
     this.success = false;
   }
   else{
     
     this.signuppage=false;
     this.processend=true;
     this.success = true;
    
 
   }
 
  }
  login(){
    this.router.navigate(['/login']);
  }

}
