import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User }  from './../classes/user';
import { UserServiceService }  from './../user-service.service';


@Component({
  selector: 'app-otheruser',
  templateUrl: './otheruser.component.html',
  styleUrls: ['./otheruser.component.css']
})
export class OtheruserComponent implements OnInit {
  islogged:string;
  
  user: User;
  result : string;
  updatepage: boolean = true;
  success: boolean;
  processend: boolean = false;
  

  constructor(private loginserviceService: LoginserviceService,
    private router: Router,
    private userService : UserServiceService){
      this.user= new User();
  }
  async onSubmit(){
    let res;
    res= await this.userService.updateUser (this.loginserviceService.getusername(),this.user.password,
      this.user.email);
      if(res==null){
        this.updatepage=false;
        this.processend=true;
        this.success = false;
        console.log("failure");
      }
      else{
        this.updatepage=false;
        this.processend=true;
        this.success = true;
        
      }
    }
 

  getLoginDetails(): string {
    this.islogged= this.loginserviceService.currentUserValue();
    return this.islogged;
  }

  ngOnInit() {
    this.islogged=this.getLoginDetails();
    if(this.islogged!="user" ){
      this.loginserviceService.resetvalue();
      this.router.navigate(['/login']);
      return;
    }
  }

  

}
