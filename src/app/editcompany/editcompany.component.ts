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
  boarddirstr:string;
  assocstr:string;
  bodname:string;
  bodarr:string[];
  assocse:string;
  assocarr:string[];
  first:number;
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
            this.boarddirstr="";
            this.assocstr="";
            this.first=0;
            if(this.findcompany.boardOfDirs){
            this.findcompany.boardOfDirs.forEach(element => {
              if(this.first>0)
                this.boarddirstr+=",";
              else
                this.first=1;
              this.boarddirstr+=element.boardOfDirName;
              
            });
          }
            this.first=0;
            if(this.findcompany.assocStockExchange){
            this.findcompany.assocStockExchange.forEach(element => {
              if(this.first>0)
                this.assocstr+=",";
              else
                this.first=1;
              this.assocstr+=element.stockexchange+":"+element.stockcode;
              
            });
          }
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
 this.company.ceo=this.findcompany.ceo;
 this.company.companyCode=this.findcompany.companyCode;
 this.company.companyDetails=this.findcompany.companyDetails;
 this.company.companyId=this.findcompany.companyId;
 this.company.companyName=this.findcompany.companyName;
 this.company.sector=this.findcompany.sector;


    let res = await this.companyallService.updateCompany(this.company)
    if(res!=null){
      this.router.navigate(['/managecompany']);
    }
  
   
  }


}
