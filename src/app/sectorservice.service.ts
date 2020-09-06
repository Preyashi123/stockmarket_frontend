import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Sector } from './sector';
import { Companyclass } from './companyclass';

import {CompanyStockPrice} from './company-stock-price';
import {SectorPriceDetails} from './sector-price-details'

@Injectable({
  providedIn: 'root'
})
export class SectorserviceService {

  private sectorURL: string;
  private companyURL: string;
  private sectorPostURL: string;
  private companyPostURL: string;

  constructor(private http: HttpClient) { 
    this.sectorURL = "http://localhost:8085/sectors";
    this.companyURL = "http://localhost:3002/company";
    this.sectorPostURL = "http://localhost:8085/sector/comparesector";
    this.companyPostURL = "http://localhost:3002/company/companyStockPrice";
  }

  public findAllSectors(): Observable<Sector[]>{
    return this.http.get<Sector[]>(this.sectorURL);
  }

  public findAllCompanies(): Observable<Companyclass[]>{
    return this.http.get<Companyclass[]>(this.companyURL);
 }

  public findSectorPriceDetails(postdata): Observable<any>{
    return this.http.post<SectorPriceDetails[]>(this.sectorPostURL,postdata);
  }

  public findStockPrices(postdata): Observable<any>{
  return this.http.post<CompanyStockPrice[]>(this.companyPostURL,postdata);
  
}
}
