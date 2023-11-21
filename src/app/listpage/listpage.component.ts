import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.scss']
})
export class ListpageComponent implements OnInit {

  dataList: any[] = [];
  constructor(public dialog: MatDialog,
  private AuthService: AuthService) {
    
  } 

  pathUrl = 'http://localhost/backend/app/application/';
  ngOnInit(): void {
    this.loadData();
  }

  openDialog(img: any): void {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: '80%', // Adjust width as needed
      data: { imageUrl: img, pathUrl: this.pathUrl }
    });
  }

  selectedImageUrl: string | null = null;

  showLargeImage(row: any): void {
    this.selectedImageUrl = row.image;
  }

  loadData(): void {
    this.AuthService.getAllData('Formdata/getAllData').subscribe(data => {
      console.log(data);
      this.dataList = data;
    });
  }

}
