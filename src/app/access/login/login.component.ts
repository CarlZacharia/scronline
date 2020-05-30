import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { SocialloginService } from '../../services/sociallogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: SocialUser;

  constructor(private auth: AuthService, private social: SocialloginService, private router: Router) { }

  ngOnInit() {

  }

  signInWithGoogle(): void {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      this.social.loginService(user).subscribe((u) => {
        return this.router.navigate(['/dashboard']);
      })
    })
  }

  signInWithFB(): void {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.auth.signOut();
  }

}