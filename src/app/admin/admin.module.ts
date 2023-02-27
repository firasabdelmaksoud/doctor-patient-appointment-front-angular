
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { NgxPaginationModule } from 'ngx-pagination';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    HomeComponent,
    UsersComponent,
    AdduserComponent,
    DoctorsComponent,
    PatientsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ChartModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
