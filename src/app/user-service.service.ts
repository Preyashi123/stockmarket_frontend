import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  res;
   msg; 
   private url: string;
   private finalurl: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3004/';
   }
   
   public addUser(username:string, password:string, email:string):Promise<any>{

    this.finalurl = this.url+"newUser?"+"username="+username+"&password="+password+"&email="+email;
    return this.http.get(this.finalurl).toPromise();
    
    }
    
    public updateUser(username:string, password:string, email:string):Promise<any>{
    const headers=new HttpHeaders().set('Content-Type','text/plain; charset=utf-8');
    
    this.finalurl = this.url+"update?"+"username="+username+"&password="+password+"&email="+email;
    return this.http.get(this.finalurl).toPromise();
   
  } 
}
