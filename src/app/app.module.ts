import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AppComponent } from './app.component';
import { LoginComponent } from './access/login/login.component';
import { DashboardComponent } from './access/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideosComponent } from './access/dashboard/videos/videos.component';
import { UploadsComponent } from './access/dashboard/uploads/uploads.component';
import { QuestionsComponent } from './access/dashboard/questions/questions.component';
import { AuthGuard } from './auth.guard';



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("733820818592-r3j791k1poec1lpjiuftve02j044i7r6.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1022839784784658")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    VideosComponent,
    UploadsComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    { provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }




