import { Stockexchangecompany } from './stockexchangecompany';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StockExchange} from 'src/app/stockexchange';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  private stockExchangesUrl: string;

  constructor(private http: HttpClient) { 
    this.stockExchangesUrl = 'http://localhost:8082/stockexchanges';

  }

  public findAll(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.stockExchangesUrl);
  }

  public save(stockExchange: StockExchange) {
    return this.http.post<StockExchange>(this.stockExchangesUrl, stockExchange);
  }

  public getCompanyList(id : number) : Observable<Stockexchangecompany[]>{

    return this.http.get<Stockexchangecompany[]>(`${this.stockExchangesUrl}/${id}/companies`);

  }

}