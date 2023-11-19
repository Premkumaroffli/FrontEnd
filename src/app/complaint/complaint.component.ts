import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent {
  myForm!: FormGroup;
  selectedOption: Number = 0;
  options: any[] = [
    { id: 1, name: 'Road Issues' },
    { id: 2, name: 'Water Issue' },
    { id: 3, name: 'Electricity Issue' },
    { id: 4, name: 'Others' },
  ];

  url :any = '';

  formdata = {
    name: '',
    issues: '',
    selectedOption: '',
    complaint: '',
    address: '',
    phone: '',
    image:'',
  };

  status  = true;

  constructor(
    // public myForm: FormGroup,
    private fb: FormBuilder,
    private authService: AuthService,
    private router : Router
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      image: ['']
    });
  }

  onSelectionChange()
  {
    console.log(this.formdata.selectedOption);
  }

  handleFileInput(event: any): void {
    if(event.target.files)
    {
      console.log(event);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =(event:any)=>{
        this.url = event.target.result;
      }
    }
    this.formdata.image = event.target.files[0];
 }

  onFileChange(event: any) {
    if(event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.formdata.image = file;
      console.log(this.formdata);
    }
  }

  onSubmit() { 
    console.log(this.formdata);
    const formData = new FormData();
    formData.append('file', this.formdata.image);
    console.log(formData);
    this.authService.savecomplaint('Formdata/issuedetails', formData).subscribe(response => {
      if (response.status === 'success') {
        // Successful login logic, redirect or show success message
        console.log('Data successful');
        this.router.navigate(['/home']);

      } 
      else {
        // Failed login logic, show error message
        console.log('Data failed');
        this.status = false;
      }
    });

  }
}
