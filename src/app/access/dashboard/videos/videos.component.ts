import { Component, OnInit } from '@angular/core';
import { SocialloginService } from '../../../services/sociallogin.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private social: SocialloginService) { }

  ngOnInit(): void {
    console.log(this.social.isloggedin, this.social.getUser());
  }

}
