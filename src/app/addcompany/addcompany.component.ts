import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginserviceService} from '../loginservice.service';
import {Companies} from '../classes/companies';
import{AddcompanyService} from '../services/addCompany.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CompanyallService} from '../companyall.service';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})

export class AddcompanyComponent implements OnInit {

  islogged:string;
  objpost:Companies;
  company:Companies;

  bodname:string;
  bodarr:string[];
  assocse:string;
  assocarr:string[];

  constructor(private loginserviceService: LoginserviceService,
    private router: Router,private route: ActivatedRoute,private companyallService:CompanyallService){
      this.company=new Companies();
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
  }

  


  async onSubmit()
  {
    
   // this.bodname=this.company.boardOfDirs;
   if(this.bodname!=null){
   this.bodarr=this.bodname.split(",");
   console.log("bodarr"+this.bodarr);
  console.log(this.bodarr[0])
  // this.company.boardOfDirs[0].boardOfDirName=this.bodarr[0];
  // console.log("company-bod"+this.company.boardOfDirs[0].boardOfDirName);
  // this.company.boardOfDirs=this.bod.boardOfDirName;
  for (let i = 0; i < this.bodarr.length; i++) {
    this.company.boardOfDirs[i].boardOfDirName=this.bodarr[i];
  }
}
if(this.assocse!=null){
  this.assocarr=this.assocse.split(",");
  //console.log("assocarr"+this.assocarr);
  //this.company.assocStockExchange[0].stockexchange=this.assocarr[0].split(":")[0];
  //console.log("compayassocstock0"+this.company.assocStockExchange[0].stockexchange);
  //this.company.assocStockExchange[0].stockcode=this.assocarr[0].split(":")[1];

  for (let i = 0; i < this.assocarr.length; i++) {
    this.company.assocStockExchange[i].stockexchange=this.assocarr[i].split(":")[0];
    this.company.assocStockExchange[i].stockcode=this.assocarr[i].split(":")[1];
  }
}
  
 let res;
   res=await this.companyallService.addcompany(this.company);
   console.log(res);
    if(res!=null)
  res = await this.companyallService.updateCompany(this.company);
  this.router.navigate(['/managecompany']);
  }

  




}
