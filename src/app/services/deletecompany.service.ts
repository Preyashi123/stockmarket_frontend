import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Companies} from '../classes/companies';
@Injectable({
  providedIn: 'root'
})
export class DeletecompanyService {

  constructor(private httpclient:HttpClient){}

  public deleteCompany(companyCode):Observable<any>
  {
      console.log(companyCode);
      return this.httpclient.delete<Companies>("http://localhost:3002/company/deletecompany/"+companyCode);
  }
}
