import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  islogged:string;
 
constructor(private loginserviceService: LoginserviceService,
  private router: Router){
}

getLoginDetails(): String {
  this.islogged= this.loginserviceService.currentUserValue();
  return this.islogged;
}

ngOnInit() {
  console.log(this.getLoginDetails());
}

logout(){
  this.loginserviceService.loggedout();
  this.router.navigate(['/logout']);
}



}
