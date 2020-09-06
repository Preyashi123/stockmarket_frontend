import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {GetcompanyService} from '../services/getCompany.service';
import {Companies} from '../classes/companies';
import {DeletecompanyService} from '../services/deleteCompany.service';
import {CompanyallService} from '../companyall.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {
  islogged:string;
  listcompanies:Companies;
  updateCompanybool=false;
  delcompany:String;
  delcompanybool=false;

  constructor(private loginserviceService: LoginserviceService,
    private router: Router,private getcompanyservice:GetcompanyService,private companyallService:CompanyallService){
  }

  getLoginDetails(): string {
    this.islogged= this.loginserviceService.currentUserValue();
    return this.islogged;
  }

  ngOnInit() {
    this.islogged=this.getLoginDetails();
    if(this.islogged!="admin" ){
      this.loginserviceService.resetvalue();
      this.router.navigate(['/login']);
      return;
    }
   this.reloadData();
  }
  async  deleteCompany(companyCode:number)
{
  let res;
  let msg;
  res=await this.companyallService.deletecompany(companyCode);
   
    console.log("data in 2:"+res);
    res.forEach(element => {
      msg=element;
    });
    if(msg==="SUCCESS"){
      this.reloadData();
     
    }

}

reloadData() {
  this.getcompanyservice.getCompanies().subscribe
  (
    (data)=>
    {
      this.listcompanies=data;
    }
  );
  this.router.navigate(['/managecompany']);
}


public addcompany(){
  this.router.navigate(['/addcompany']);
}

public updateCompany(companyCode:number){
  this.router.navigate(['/editcompany/'+companyCode]);

}

 

}
