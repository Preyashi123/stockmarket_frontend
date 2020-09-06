import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SectorserviceService } from '../sectorservice.service';
import { Sector } from '../sector';

import { CompanyserviceService } from '../companyservice.service';
import { Companyclass } from '../companyclass';

import { CompanyStockPrice } from '../company-stock-price';
import { SectorPriceDetails } from '../sector-price-details';

import {SharedservicemapService} from '../sharedservicemap.service';

@Component({
  selector: 'app-comparesector',
  templateUrl: './comparesector.component.html',
  styleUrls: ['./comparesector.component.css']
})
export class ComparesectorComponent implements OnInit {

  islogged:string;

  sectors: Sector[];
  companies: Companyclass[];
  sectorPrices: SectorPriceDetails[];
  stockPrices: CompanyStockPrice[];

  public sectorvalue: string;
  public companyvalue: string;
  public fromperiod: string;
  public toperiod: string;
  public period: number;
  public periodicity: number;

  public sectorList: string[] = [];
  public companyList: number[] = [];
  public obj1 : any;
  public obj2 : any;
  public formdata1: JSON;
  public formdata2: JSON;

  public lolCompanyStockPrice: CompanyStockPrice[][] = [];
  public lolSectorPriceDetails: SectorPriceDetails[][] = [];

  public companyCode: number;

  public disablevalue: string = 'not disable';

  public flag: boolean = false;

  public obj3: any = [];
  public obj4: any = [];

  constructor(private loginserviceService: LoginserviceService,
    private router: Router, private sectorService: SectorserviceService, private companyService : CompanyserviceService, private sharedservicemap: SharedservicemapService){
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

    this.sectorService.findAllSectors().subscribe(data => { 
      this.sectors = data
      //console.log(data);
    });

    this.companyService.findAllCompanies().subscribe(data => { 
      this.companies = data
      //console.log(data);
    });
  }


  saveFormData(): void {
    //console.log(this.sectorvalue);
    //console.log(this.companyvalue);
    //console.log(this.fromperiod);
    //console.log(this.toperiod);
    //console.log(this.period);

    this.companies.forEach(element => {
      //console.log(element.companyName);
      //console.log(this.companyvalue);
      if(element.companyName == this.companyvalue)
      {
        this.companyCode = element.companyCode;
        //console.log(element.companyCode);
      }
    });
    //console.log(this.companyCode);
    this.companyList.push(this.companyCode);

    this.sectorList.push(this.sectorvalue);


    this.obj1 = {
      "sectorList": this.sectorList,
      "from": this.fromperiod,
      "to": this.toperiod,
      "period": Number(this.period)
    };

    this.formdata1 = <JSON>this.obj1;
    //console.log(this.formdata1);


    this.sectorService.findSectorPriceDetails(this.obj1).subscribe(data => {
      this.sectorPrices=data;
      //console.log(data);
      this.lolSectorPriceDetails.push(this.sectorPrices);
    });
    
    //console.log(this.lolSectorPriceDetails);
    this.sectorPrices = [];

    this.obj2 = {
      "companyList": this.companyList,
      "from": this.fromperiod,
      "to": this.toperiod,
      "periodicity": Number(this.period)
    };

    this.formdata2 = <JSON>this.obj2;
    //console.log(this.formdata2);

    this.companyService.findStockPrices(this.obj2).subscribe(data => {
      this.stockPrices=data;
      //console.log(data);
      this.lolCompanyStockPrice.push(this.stockPrices);
    });
    
    //console.log(this.lolCompanyStockPrice);
    this.companyList = [];

    //this.disablevalue = 'disable';
    //this.flag = true;
  }

  sendData(): void{

    this.companies.forEach(element => {
      //console.log(element.companyName);
      //console.log(this.companyvalue);
      if(element.companyName == this.companyvalue)
      {
        this.companyCode = element.companyCode;
        //console.log(element.companyCode);
      }
    });
    //console.log(this.companyCode);
    this.companyList.push(this.companyCode);

    this.sectorList.push(this.sectorvalue);

    this.obj1 = {
      "sectorList": this.sectorList,
      "from": this.fromperiod,
      "to": this.toperiod,
      "period": Number(this.period)
    };

    this.formdata1 = <JSON>this.obj1;
    //console.log(this.formdata1);


    this.sectorService.findSectorPriceDetails(this.obj1).subscribe(data => {
      this.sectorPrices=data;
      //console.log(data);
      this.lolSectorPriceDetails.push(this.sectorPrices);
    });

    console.log(this.lolSectorPriceDetails[0]);
    
    //console.log(this.lolSectorPriceDetails);
    this.sectorPrices = [];
    
    if(this.flag == false)
    {
      
  
      this.obj2 = {
        "companyList": this.companyList,
        "from": this.fromperiod,
        "to": this.toperiod,
        "periodicity": Number(this.period)
      };
  
      this.formdata2 = <JSON>this.obj2;
      //console.log(this.formdata2);
  
      this.companyService.findStockPrices(this.obj2).subscribe(data => {
        this.stockPrices=data;
        //console.log(data);
        this.lolCompanyStockPrice.push(this.stockPrices);
      });
      
      //console.log(this.lolCompanyStockPrice);
      this.companyList = [];
    }

    console.log(this.lolSectorPriceDetails[0]);

    this.lolSectorPriceDetails[0].forEach(element => {
      
      var temp3 = {
        "currentPrice" : element.price,
        "date" : element.date
      }
      this.obj3.push(temp3);
    });

    if(this.lolSectorPriceDetails.length>1)
    {
      this.lolSectorPriceDetails[1].forEach(element => {
      var temp4 = {
        "currentPrice" : element.price,
        "date" : element.date
      }
      this.obj4.push(temp4);
      });
    }
    

    //console.log(this.lolCompanyStockPrice);
    //console.log(this.lolSectorPriceDetails[0]);
    //console.log(this.lolSectorPriceDetails[1]);

    //console.log(this.obj3);
    //console.log(this.obj4);

    this.sharedservicemap.stockprices1 = this.obj3;

    if(this.flag==true){
      this.sharedservicemap.stockprices2 = this.obj4;
    }
    else{
      this.sharedservicemap.stockprices2 = this.lolCompanyStockPrice[0];
    }
      
      this.sharedservicemap.company1 = "Company 1";
      this.sharedservicemap.company2 = "Company 2";
      this.sharedservicemap.isSamePeriod = true

      
          
      this.sharedservicemap.callMethodOfSecondComponent("random");
  }
}
