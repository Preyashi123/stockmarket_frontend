import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  islogged:string ;
  
  constructor(private http: HttpClient,  private router: Router) { 
    console.log("here in service");
    if(localStorage){
      this.islogged= localStorage.getItem('islogged');
      if(this.islogged===null){
        localStorage.setItem('islogged',"no");
      }
    }
    else{
      console.log("not supported");
    }
  }
   currentUserValue(): string {
    return localStorage.getItem('islogged');
}

 loggedin(type:string,name:string){
  localStorage.setItem('islogged',type);
  localStorage.setItem('username',name);
  console.log(type);
}

resetvalue(){
  localStorage.setItem('islogged',"no");
}

getusername(){
  return localStorage.getItem('username');;
}

loggedout(){
  localStorage.setItem('islogged',"no");
  console.log("set n from service");
}
/*
loginapi(username:string,password:string): string {
  let res;
  let msg;
    this.http.get('http://localhost:3004/login?username='+username+'&password='+password).toPromise();
   (
     data=>
     {
       res=data;
       console.log("data in :"+res);
       
     }
   );
   res.array.forEach(element => {
    msg=element;
  });
   if(msg==="SUCCESS"){
   if(username==="admin"){
     this.loggedin("admin");
     this.router.navigate(['/adminlanding']);
   }
   else{
     this.loggedin("user");
     this.router.navigate(['/userlanding']);
   }
  }else{
     return "Invalid Username or password";
   }
    console.log(res);
    return "";
 
    
   }
*/


}
