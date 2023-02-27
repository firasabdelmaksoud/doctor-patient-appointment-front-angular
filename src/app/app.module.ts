import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [AppComponent,  LoginsuccessComponent, HomepageComponent,  NotfoundComponent, LoginComponent, SignupComponent, ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,FormsModule,HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
