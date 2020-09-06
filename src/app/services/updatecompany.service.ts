import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Companies} from '../classes/companies';
@Injectable({
  providedIn: 'root'
})
export class UpdatecompanyService {

  constructor(private httpclient:HttpClient){}

    public updateCompany(updatedata:Companies):Observable<any>
    {
        
        return this.httpclient.put<Companies>("http://localhost:3002/company/updatecompany",updatedata);
    }
}
