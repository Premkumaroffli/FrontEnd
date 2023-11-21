import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgPageComponent } from './msgpage/msgpage.component';
import { LoginComponent } from './auth/login/login.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ListpageComponent } from './listpage/listpage.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'msgpage',
    component : MsgPageComponent,
  },
  {
    path: 'listpage',
    component : ListpageComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: '',
    component : ComplaintComponent
  },
  {
    path: 'complaint',
    component : ComplaintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
