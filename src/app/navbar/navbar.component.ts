import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { SocialloginService } from '../services/sociallogin.service';
import { Router } from '@angular/router';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public user: SocialUser;
isloggedin: boolean;

  constructor(private auth: AuthService, private router: Router, private social: SocialloginService) { }

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      if(user){
        this.user = user;
        this.isloggedin = true;
      } else {
        this.isloggedin = false;
      }
    })
  }

  logout(): void {
    this.auth.signOut();
    this.social.user = null;
    this.social.isloggedin = false;
    this.router.navigate(['/login']);
  }

  signInWithGoogle(): void {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      this.social.loginService(user).subscribe((u) => {
        return this.router.navigate(['/dashboard']);
      })
    })

  }

}
