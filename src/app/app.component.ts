import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { AuthGuard } from '../_guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAuthenticated() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
  }
}
