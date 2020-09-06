import { StockExchangeService } from './../stock-exchange.service';
import { StockExchange } from './../stockexchange';
import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginserviceService} from '../loginservice.service';
import { ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addexchange',
  templateUrl: './addexchange.component.html',
  styleUrls: ['./addexchange.component.css']
})
export class AddexchangeComponent implements OnInit {
  islogged:string;
  stockExchange : StockExchange;

  constructor(private loginserviceService: LoginserviceService,
    private router: Router, private stockExchangeService: StockExchangeService){

    this.stockExchange = new StockExchange();

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

  onSubmit() {
    this.stockExchangeService.save(this.stockExchange).subscribe(result => this.gotoStockExchangesList());
  }

  gotoStockExchangesList() {
    this.router.navigate(['/manageexchange']);
  }

}
