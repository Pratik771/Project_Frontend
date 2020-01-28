import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SignupService } from './signup.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { MydetailsComponent } from './mydetails/mydetails.component';

import { UserDashComponent } from './user-dash/user-dash.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AssignAppointmentComponent } from './assign-appointment/assign-appointment.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { TestListComponent } from './test-list/test-list.component';
import { ResultComponent } from './result/result.component';
import { GenerateLicenseComponent } from './generate-license/generate-license.component';
import { MyLicenseComponent } from './my-license/my-license.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { PasswordHistoryComponent } from './password-history/password-history.component';



export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactUsComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    UserinfoComponent,
    MydetailsComponent,

    UserDashComponent,
    UserProfileComponent,
    AssignAppointmentComponent,
    TestDriveComponent,
    TestListComponent,
    ResultComponent,
    GenerateLicenseComponent,
    MyLicenseComponent,
    PasswordHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    RouterModule.forRoot([
      { path:"home" ,component:HomeComponent},
      { path:"header" ,component:HeaderComponent},
      { path:"aboutus" ,component:AboutusComponent},
      { path:"SignIn" ,component:SignInComponent},
      { path:"SignUp" ,component:SignUpComponent},
      { path:"contactus" ,component:ContactUsComponent},
      { path:"ForgotPassword" ,component:ForgotPasswordComponent},
      { path:"Userinfo" ,component:UserinfoComponent},
      { path:"Dashboard" ,component:DashboardComponent,children:[ { path:"TestList" ,component:TestListComponent}, { path:"Userinfo" ,component:UserinfoComponent},{ path:"PasswordHistory" ,component:PasswordHistoryComponent}]},
      { path:"UserDash" ,component:UserDashComponent},
      { path:"Mydetails" ,component:MydetailsComponent},
      { path:"UserProfile" ,component:UserProfileComponent},
      { path:"AssignAppointment" ,component:AssignAppointmentComponent},
      { path:"TestDrive" ,component:TestDriveComponent},
      { path:"TestList" ,component:TestListComponent},
      { path:"GenerateLicense" ,component:GenerateLicenseComponent},
      { path:"Result" ,component:ResultComponent},
      { path:"MyLicense" ,component:MyLicenseComponent},
      { path:"PasswordHistory" ,component:PasswordHistoryComponent}
    
     ])
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
