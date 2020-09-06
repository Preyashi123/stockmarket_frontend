import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
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
 