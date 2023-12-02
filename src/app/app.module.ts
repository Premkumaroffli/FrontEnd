import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsgPageComponent } from './msgpage/msgpage.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ComplaintComponent } from './complaint/complaint.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListpageComponent } from './listpage/listpage.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component'; 
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AuthGuard } from './shared/auth.guard';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { AdminListpageComponent } from './adminlist/adminlist.component';
import { StatusDialogComponent } from './status-dialog/status-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MsgPageComponent,
    ComplaintComponent,
    ListpageComponent,
    PopupDialogComponent,
    ViewDialogComponent,
    AdminListpageComponent,
    StatusDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [
    AuthGuard,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
