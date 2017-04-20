import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { OpportunityPage } from '../pages/opportunity/opportunity.component';
import { AdminVolsListPage } from '../pages/admin-vols/admin-vols.component';
import { AdminOppsListPage } from '../pages/admin-opps/admin-opps.component';
import { RegistrationPage } from '../pages/registration/registration.component';
import { OpportunityDetailPage } from '../pages/opportunity-detail/opp-detail.component';
import { LoginPage } from '../pages/login/login.component';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { VolunteerService } from '../_services/volunteer.service';
import { AlertService } from '../_services/alert.service';
import { AuthGuard } from '../_guards/auth.guard';
import { FilterArrayPipe } from '../_pipes/filter-array.pipe';
import { PaginatePipe } from '../_pipes/paginate.pipe';
import { AlertComponent } from '../_directives/alert.component';

// used to create fake backend
import { fakeBackendProvider } from '../_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

const appRoutes: Routes = [
  { path: 'home', component: OpportunityPage },
  { path: 'opp/:id', component: OpportunityDetailPage },
  { path: 'admin', component: LoginPage },
  { path: 'register/:id', component: RegistrationPage },
  { path: 'volunteers', component: AdminVolsListPage, canActivate: [AuthGuard] },
  { path: 'opportunities', component: AdminOppsListPage, canActivate: [AuthGuard] },
  {
    path: 'vols', component: AdminVolsListPage,
    //data: { title: 'Heroes List' }
  },
  {
    path: 'opps', component: AdminOppsListPage,
    //data: { title: 'Heroes List' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    FilterArrayPipe,
    PaginatePipe,
    AppComponent,
    OpportunityPage,
    OpportunityDetailPage,
    LoginPage,
    RegistrationPage,
    AdminVolsListPage,
    AdminOppsListPage,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService,
    VolunteerService,
    AuthGuard,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
