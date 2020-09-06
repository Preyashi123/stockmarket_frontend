import { StockExchangeService } from './../stock-exchange.service';
import { StockExchange } from 'src/app/stockexchange';
import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {
  islogged:string;
  stockExchanges :StockExchange[];

  constructor(private loginserviceService: LoginserviceService,
    private router: Router, private stockexchangeService: StockExchangeService){
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

    this.stockexchangeService.findAll().subscribe(data => {
    this.stockExchanges = data;});

  }

  companyList(id : number) {
    this.router.navigate(['stockexchange-companyList',id]);

  }
}
