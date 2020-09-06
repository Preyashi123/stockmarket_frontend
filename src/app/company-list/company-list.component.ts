import { StockExchangeService } from './../stock-exchange.service';
import { Stockexchangecompany } from './../stockexchangecompany';
import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  islogged:string;
  companies : Stockexchangecompany[];

  constructor(private loginserviceService: LoginserviceService,
    private router: Router , private route : ActivatedRoute,  private stockexchangeService: StockExchangeService){
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
    this.route.paramMap.subscribe(params => {const stockExchangeId = +params.get('id')
    this.stockexchangeService.getCompanyList(stockExchangeId).subscribe(data => {
    this.companies = data; })});
  }
}
