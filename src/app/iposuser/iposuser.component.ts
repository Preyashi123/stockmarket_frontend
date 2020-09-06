import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { IpoService } from './../ipo.service';
import { Ipo } from './../ipo';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-iposuser',
  templateUrl: './iposuser.component.html',
  styleUrls: ['./iposuser.component.css']
})
export class IposuserComponent implements OnInit {

  islogged:string;
  ipoList :Ipo[];
  id: number;
  ipo : Ipo;

  constructor(private loginserviceService: LoginserviceService,
    private router: Router,  private ipoService: IpoService){
  }

  getLoginDetails(): string {
    this.islogged= this.loginserviceService.currentUserValue();
    return this.islogged;
  }

  ngOnInit() {
    this.islogged=this.getLoginDetails();
    console.log("here"+this.islogged);
    if(this.islogged!="user" ){
      this.loginserviceService.resetvalue();
     this.router.navigate(['/login']);
      return;
    }
    this.reloadData();
  }
  gotoIpoList() {
    this.router.navigate(['/iposuser']);
  
  }
  reloadData() {
    this.ipoService.findAll().subscribe(data => {
      this.ipoList = data;
    });
    this.gotoIpoList();
  }

}
