import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }


  login(email:string, password:string) {
    const pc = {'email': email, 'password': password};
    return this.http.post('https://goodltc.com/php/login.php', JSON.stringify(pc));
  }

  logincheck() {
    return this.http.get('https://goodltc.com/php/api.php');
  }


register(username: string, email:string, password:string, address: string, csz: string, mobile: string) {
  return this.http.post('https://goodltc.com/php/newUserRegistration.php', {username, email, password, address, csz, mobile});
}


logout() {
  localStorage.removeItem('access_token');
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

}
