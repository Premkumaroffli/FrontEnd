import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm!: FormGroup ;
  status : boolean = false;

  constructor(
    // public myForm: FormGroup,
    private fb: FormBuilder,
    private authService: AuthService,
    private router : Router
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.authService.signup('api/signup', formData).subscribe(response => {
        if (response.status === 'success') {
          // Successful login logic, redirect or show success message
          console.log('Login successful');
          localStorage.setItem('token','12345')
          this.status = true;
        } 
        else {
          // Failed login logic, show error message
          console.log('Login failed');
        }
      });


    
    }
  }

}
