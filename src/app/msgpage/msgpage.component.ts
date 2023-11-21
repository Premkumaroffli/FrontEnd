import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-msgpage',
  templateUrl: './msgpage.component.html',
  styleUrls: ['./msgpage.component.scss']
})
export class MsgPageComponent {
  email: string = '';
  savedmsg: boolean = false;

  constructor(
    private authService: AuthService,
    private router : Router
    ) { }

  onSubmit()
  {
    this.authService.emailsave('api/emailsave', this.email).subscribe(response => {
      if (response.status === 'saved') {
        // Successful login logic, redirect or show success message
        console.log('Email Registered');
        this.savedmsg = true;
        this.email = '';
      }

      else {
        // Failed login logic, show error message
        console.log('Login failed');
      }
    });
  }
}
