import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Companies } from '../classes/companies';
@Injectable({
  providedIn: 'root'
})
export class GetonecompanyService {

  constructor(private httpclient:HttpClient){}

    public getCompany(companycode):Observable<any>
    {
        
        return this.httpclient.get<Companies>("http://localhost:3002/company/"+companycode);

    }
}
