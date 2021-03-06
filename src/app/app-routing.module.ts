import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { DashboardComponent } from './access/dashboard/dashboard.component';
import { VideosComponent } from './access/dashboard/videos/videos.component';
import { UploadsComponent } from './access/dashboard/uploads/uploads.component';
import { QuestionsComponent } from './access/dashboard/questions/questions.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'videos', component: VideosComponent, canActivate: [AuthGuard] },
  { path: 'uploads', component: UploadsComponent, canActivate: [AuthGuard]  },
  { path: 'questions', component: QuestionsComponent, canActivate: [AuthGuard]  },
  //{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
