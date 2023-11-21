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
import { ComplaintComponent } from './complaint/complaint.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListpageComponent } from './listpage/listpage.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component'; 
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComplaintComponent,
    ListpageComponent,
    PopupDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
