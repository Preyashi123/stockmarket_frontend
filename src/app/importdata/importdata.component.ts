import {LoginserviceService} from '../loginservice.service';
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as xlsx from 'xlsx';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportdataComponent implements OnInit {
  islogged:string;

  constructor(private loginserviceService: LoginserviceService,
    private router: Router){
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
  title = 'Select Excel File To Be Uploaded';

  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  stocks = [
    {
      Company_Code: "1002",
      Stock_Exchange: "nsc",
      Price_Per_Share_in_Rs: 356.23,
      Date: "08-06-2019",
      Time: "10:30:00"
    },
    {
      Company_Code: "1002",
      Stock_Exchange: "nsc",
      Price_Per_Share_in_Rs: 357.09,
      Date: "08-06-2019",
      Time: "10:45:00"
    },
    {
      Company_Code: "1002",
      Stock_Exchange: "nsc",
      Price_Per_Share_in_Rs: 356.23,
      Date: "08-06-2019",
      Time: "10:50:00"
    },
    {
      Company_Code: "1002",
      Stock_Exchange: "nsc",
      Price_Per_Share_in_Rs: 351.43,
      Date: "08-06-2019",
      Time: "11:00:00"
    },
    {
      Company_Code: "1002",
      Stock_Exchange: "nsc",
      Price_Per_Share_in_Rs: 348.91,
      Date: "08-06-2019",
      Time: "11:10:00"
    }
   ];
   exportToExcel() {
    const ws: xlsx.WorkSheet =   
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'sample_excel_data.xlsx');
    }

}
