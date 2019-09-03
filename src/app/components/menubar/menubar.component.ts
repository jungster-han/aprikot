import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  username: string;
  role: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '500',
      data: { username: this.username, role: this.role }
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
      this.role = result;
    })

  }
}
