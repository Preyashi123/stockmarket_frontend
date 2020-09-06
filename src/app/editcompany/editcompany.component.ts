import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import{UpdatecompanyService} from '../services/updateCompany.service';
import { GetonecompanyService } from '../services/getOneCompany.service';
import {Companies} from '../classes/companies';
import{ActivatedRoute} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CompanyallService} from '../companyall.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {
  islogged:string;
  company:Companies;
  findcompany:Companies;
  objupdate:Companies;

  bodname:string;
  bodarr:string[];
  assocse:string;
  assocarr:string[];
  constructor(private loginserviceService: LoginserviceService,
    private router: Router,private getonecompanyservice:GetonecompanyService,private companyallService:CompanyallService,private route:ActivatedRoute) 
    {
      this.company=new Companies();
      this.findcompany=new Companies();
      this.objupdate=new Companies();

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
    this.route.paramMap.subscribe(params=>{
      const compid=+params.get("companyCode")
   
    
      if(compid!=null)
      {
        console.log(compid);    // this.getCompany(compid);
        this.getonecompanyservice.getCompany(compid).subscribe
        (
          datasinglecomp=>
          {
            this.findcompany=datasinglecomp;
            
          }
        );
      }
    })
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
    console.log("here"+this.bodarr[i])
     this.findcompany.boardOfDirs[i].boardOfDirName=this.bodarr[i];
   }
 }
 if(this.assocse!=null){
   this.assocarr=this.assocse.split(",");
   //console.log("assocarr"+this.assocarr);
   //this.company.assocStockExchange[0].stockexchange=this.assocarr[0].split(":")[0];
   //console.log("compayassocstock0"+this.company.assocStockExchange[0].stockexchange);
   //this.company.assocStockExchange[0].stockcode=this.assocarr[0].split(":")[1];
 
   for (let i = 0; i < this.assocarr.length; i++) {
     this.findcompany.assocStockExchange[i].stockexchange=this.assocarr[i].split(":")[0];
     this.findcompany.assocStockExchange[i].stockcode=this.assocarr[i].split(":")[1];
   }
 }


    let res = await this.companyallService.updateCompany(this.findcompany)
    if(res!=null){
      this.router.navigate(['/managecompany']);
    }
  
   
  }


}
