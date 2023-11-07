import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
