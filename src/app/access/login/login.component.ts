import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private jwt: JwtService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit(){
    this.jwt.login(
     this.loginForm.value.email,
     this.loginForm.value.password).subscribe(
       (data) => localStorage.setItem('access_token', JSON.stringify(data)),
        (err) => console.log(err)
     );
//     localStorage.setItem('access_token', data.authToken)
}
  

}
