import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()

export class AuthGuard implements CanActivate{
isloggedin: boolean = false;
redirecturl: string;

constructor(private router: Router, private auth: AuthService){

}
canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.authState.pipe(
         take(1),
         map(user => !!user), // <-- map to boolean
         tap(loggedIn => {
           if (!loggedIn) {
             console.log('access denied');
             this.router.navigate(['/login']);
           }
       })
  );
}
}

