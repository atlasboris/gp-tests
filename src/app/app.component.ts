import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPopupTestsComponent } from './mat-popup-tests/mat-popup-tests.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MatPopupTestsComponent, {
      data: {name: this.name, id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.id = result;
    });
  }
}
