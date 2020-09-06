import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginapiService {
  
  constructor(private http: HttpClient) { }

  loginapi(username:string,password:string): Promise<any> {

  return this.http.get('http://localhost:3004/login?username='+username+'&password='+password).toPromise();
  
  }

}
