import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginapiService} from '../loginapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";

  errormsg;
  constructor(private loginserviceService: LoginserviceService, private loginapiService : LoginapiService,
    private router: Router){
  }

  onKey(event: any) { 
    this.username = event.target.value;
    //console.log(this.username);
  }

  onKeypassword(event: any) { 
    this.password = event.target.value;
    //console.log(this.password);
  }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(['/signup']);
  }

  async login(){
    let res;
    let msg;
   res=await this.loginapiService.loginapi(this.username,this.password);
   
    console.log("data in 2:"+res);
    res.forEach(element => {
      msg=element;
    });
    if(msg==="SUCCESS"){
  if(this.username==="admin"){
    this.loginserviceService.loggedin("admin","admin");
    this.router.navigate(['/adminlanding']);
  }
  else{
    this.loginserviceService.loggedin("user",this.username);
    this.router.navigate(['/userlanding']);
  }
  }else{
    this.errormsg="Invalid Username or password";
  }
  }

  


}
