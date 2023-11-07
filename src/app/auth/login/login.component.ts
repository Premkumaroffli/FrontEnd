import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router : Router
    ) { }

  onSubmit() {
    
    this.authService.login('api/login', this.username, this.password).subscribe(response => {
      if (response.status === 'success') {
        // Successful login logic, redirect or show success message
        console.log('Login successful');
        this.router.navigate(['/home']);

      } 
      else {
        // Failed login logic, show error message
        console.log('Login failed');
      }
    });
  }
}
