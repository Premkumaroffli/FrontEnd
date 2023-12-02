import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dat: { viewdata : any },
    public dialogRef: MatDialogRef<ViewDialogComponent>,
    private authService: AuthService,
    private router : Router
  ) {}

  data : any = this.dat.viewdata;


  status  = true;

  viewstatus : any = {
    viewed : 0
  };

  url :any = '';

  tasks = [
    { id: 1, name: 'Task 1', status: 'In Progress'},
    { id: 2, name: 'Task 2', status: 'Completed'},
    { id: 3, name: 'Task 3', status: 'Pending' },
    // Add more tasks as needed
  ];

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
    this.data.image = event.target.files[0];
 }
  

  onFileChange(event: any) {
    if(event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.viewstatus.image = file;
      console.log(this.viewstatus);
    }
  }
    
  closeDialog(): void {
    this.dialogRef.close();
    console.log(this.data)
  }
  statusUpdate(type : string)
  {
    if(type === 'viewed')
    {
      if(this.data.viewed === 0 || this.data.viewed === '0')
      {
        this.data.viewed = 1;
      }
      else
      {
        this.data.viewed = 0;
      }

      console.log(this.data);
      
    }
    else if(type === 'processing')
    {
      if(this.data.processing === 0 || this.data.processing === '0')
      {
        this.data.processing = 1;
      }
      else
      {
        this.data.processing = 0;
      }
    }
    else if(type === 'completed' || this.data.completed === '0')
    {
      if(this.data.completed === 0)
      {
        this.data.completed = 1;
      }
      else
      {
        this.data.completed = 0;
      }
    }
  }

  onSubmit() {  
    console.log(this.data);
    const formData = new FormData();

    // Append form fields to viewstatus
    Object.keys(this.data).forEach(key => {
      formData.append(key, this.data[key]);
    });
    this.authService.savecomplaint('Formdata/statusdetails', formData).subscribe(response => {
      if (response.status === 'success') {
        // Successful login logic, redirect or show success message
        console.log('Data successful');
        this.closeDialog();

      } 
      else {
        // Failed login logic, show error message
        console.log('Data failed');
        this.status = false;
      }
    });

  }

}

