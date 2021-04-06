import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountStatus } from '../mat-select-tests/mat-select-tests.component';

@Component({
  selector: 'mat-popup-tests',
  templateUrl: './mat-popup-tests.component.html',
  styleUrls: ['./mat-popup-tests.component.scss']
})
export class MatPopupTestsComponent {
  accountStatus:any = AccountStatus;
  selectedValue: any;
  constructor(
    public dialogRef: MatDialogRef<MatPopupTestsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(){
    console.log(this.selectedValue)
  }
}

export interface DialogData {
  id: string;
  name: string;
}

