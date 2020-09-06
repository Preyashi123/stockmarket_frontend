import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Companies} from '../classes/companies';

@Injectable({
  providedIn: 'root'
})
export class AddcompanyService {

  constructor(private httpclient:HttpClient){}

    public postCompanies(postdata:Companies):Observable<any>
    {

        console.log(postdata.companyName);
        return this.httpclient.post<Companies>("http://localhost:3002/company/addcompany",postdata);
    }
}
