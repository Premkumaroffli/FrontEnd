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

  selectedOption: Number = 0;
  options: any[] = [
    { id: 1, name: 'Road Issues' },
    { id: 2, name: 'Water Issue' },
    { id: 3, name: 'Electricity Issue' },
    { id: 4, name: 'Others' },
  ];

  url :any = '';

  formdata :any = {
    name: '',
    issues: 'red',
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

  // uploadFile() {
  //   if (!this.formdata.image) {
  //     console.error('No file selected.');
  //     return;
  //   }
  
  //   const formData = new FormData();
  //   formData.append('file', this.formdata.image);
  
  //   this.authService.uploadFile('Formdata/uploadFile', formData).subscribe(response => {
  //     if (response.status === 'success') {
  //       console.log(response);
  //     }
  //   });
  // }
  

  onFileChange(event: any) {
    if(event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.formdata.image = file;
      console.log(this.formdata);
    }
  }

  onSubmit() { 
    const formData = new FormData();

    // Append form fields to FormData
    Object.keys(this.formdata).forEach(key => {
      formData.append(key, this.formdata[key]);
    });
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
