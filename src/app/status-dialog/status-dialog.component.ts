import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss']
})
export class StatusDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dat: { viewdata : any },
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<StatusDialogComponent>,
    private authService: AuthService,
    private router : Router
  ) {}

  data : any = this.dat.viewdata;
  pathUrl = 'http://localhost/backend/app/application/';
  status  = true;

  openDialog(img: any): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: '80%', // Adjust width as needed
      data: { imageUrl: img, pathUrl: this.pathUrl }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
    console.log(this.data)
  }

}

