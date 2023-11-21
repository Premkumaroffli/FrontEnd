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

  //  data = [
  //   { id: 1,
  //     name: 'Item 1', 
  //     issue: 'Pipe Damage',
  //     selectedOption: '',
  //     complaint: 'Broken pipes can result in extensive structural damage if not taken care of right away. Pipes can burst due to many different reasons, find out more',
  //     address: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
  //     phone: '1234567890',
  //     image: 'assets/bgimg.jpg',
  //   },
  //   { id: 1,
  //     name: 'Item 1', 
  //     issue: 'Pipe Damage',
  //     selectedOption: '',
  //     complaint: 'Broken pipes can result in extensive structural damage if not taken care of right away. Pipes can burst due to many different reasons, find out more',
  //     address: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
  //     phone: '1234567890',
  //     image:'assets/pipeproblem.jpeg',
  //   },
  //   { id: 1,
  //     name: 'Item 1', 
  //     issue: 'Pipe Damage',
  //     selectedOption: '',
  //     complaint: 'Broken pipes can result in extensive structural damage if not taken care of right away. Pipes can burst due to many different reasons, find out more',
  //     address: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
  //     phone: '1234567890',
  //     image:'',
  //   },
  //   { id: 1,
  //     name: 'Item 1', 
  //     issue: 'Pipe Damage',
  //     selectedOption: '',
  //     complaint: 'Broken pipes can result in extensive structural damage if not taken care of right away. Pipes can burst due to many different reasons, find out more',
  //     address: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.',
  //     phone: '1234567890',
  //     image:'',
  //   },
  //   // ... more items
  // ];

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
