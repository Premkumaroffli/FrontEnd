import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ListpageComponent } from './listpage/listpage.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'listpage',
    component : ListpageComponent
  },
  {
    path: '',
    component : LoginComponent
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
