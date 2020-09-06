import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetcompanyService {

  constructor(private httpclient:HttpClient){}

   public getCompanies():Observable<any>
    {
        return this.httpclient.get("http://localhost:3002/company");
    }
}
