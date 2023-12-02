import { Component, OnInit } from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { AuthService } from '../shared/auth.service';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminListpageComponent implements OnInit {

  displayedColumns: string[] = ['s_no', 'name', 'complaint', 'address', 'phone', 'status']; // Replace with your actual column names
  dataSource: any[] = [];

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

  onLogoutClick(): void {
    this.AuthService.logout();
  }

  ViewDialog(data: any): void {
    data.type = 'admin';
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      width: '50%',
      height: '315px',
      data: { viewdata: data }
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
      this.dataSource = data;
    });
  }

}
