import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private jwt: JwtService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({ 
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confpassword': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'address': new FormControl(''),
      'csz': new FormControl(''),
      'mobile': new FormControl('')      
    });
  }

  onSubmit(){
    this.jwt.register(this.registerForm.value.username,
                     this.registerForm.value.email,
                    this.registerForm.value.password, 
                    this.registerForm.value.address,
                    this.registerForm.value.csz,
                    this.registerForm.value.mobile).subscribe(
                      (data) => localStorage.setItem('access_token', JSON.stringify(data)),
                      (err) => console.log(err)
                    );
  }

}
