import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService // Add your service to the providers array
  ]
})
export class AuthModule { }
