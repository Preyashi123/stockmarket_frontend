import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Companyclass } from './companyclass';
import { CompanyStockPrice } from './company-stock-price';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  private baseUrl : string;
  private postUrl : string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3002/company";
    this.postUrl = "http://localhost:3002/company/companyStockPrice"
   }

   public findAllCompanies(): Observable<Companyclass[]>{
      return this.http.get<Companyclass[]>(this.baseUrl);
   }

   public findStockPrices(postdata): Observable<any>{
     return this.http.post<CompanyStockPrice[]>(this.postUrl,postdata);
     
   }
}
