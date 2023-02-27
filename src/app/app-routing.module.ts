import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path:'',component:HomepageComponent},
  { path :'loginsuccess' , component: LoginsuccessComponent},
  { path: 'signup', component: SignupComponent },  
 
  { path: 'login', component: LoginComponent },  
 
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
    path:'**', component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
