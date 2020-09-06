import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Companies} from './classes/companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyallService {

  private companyurl: string;

  constructor(private http: HttpClient) { 
    this.companyurl = 'http://localhost:3002/company';

  }



  public addcompany(company: Companies): Promise<any> {
    return this.http.post<Companies>(`${this.companyurl}/addcompany`, company).toPromise();
  }

  public updateCompany(company:Companies): Promise<any> {
    return this.http.post<Companies>(`${this.companyurl}/updatecompany`, company).toPromise();
  }

  deletecompany(companyCode:number): Promise<any> {

    return this.http.get(`${this.companyurl}/deletecompany/${companyCode}`).toPromise();
    
    }

}
