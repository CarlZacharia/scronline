import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private jwt: JwtService) { }

  ngOnInit() {
    this.jwt.logincheck().subscribe(
       (data) => console.log(data),
       (err) => console.log(err)
     );
  }

}
