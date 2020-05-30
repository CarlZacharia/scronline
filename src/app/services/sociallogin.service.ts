import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  user: SocialUser;
  isloggedin: boolean;

  constructor(private auth: AuthService, private http: HttpClient) {
    this.isloggedin = false;
   }

   setisloggedin(){
    this.isloggedin = true;
   }

   setloggedout(){
     this.isloggedin = false;
   }

   getUser(){
    if(this.user){
      return this.user;
    } else {
      return false;
    }
  }

  loginService(cl){
    return this.http.post("https://goodltc.com/php/loginscr.php", cl);
  }

}


              
