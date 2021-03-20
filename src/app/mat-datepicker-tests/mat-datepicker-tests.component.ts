import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mat-datepicker-tests',
  templateUrl: './mat-datepicker-tests.component.html',
  styleUrls: ['./mat-datepicker-tests.component.scss']
})
export class MatDatepickerTestsComponent implements OnInit {
  datePickerData: any = new FormControl();
  constructor() { }

  ngOnInit(): void {
    
  }

  dateChanged(){
    console.log('date picker data: ',this.datePickerData.value)
  }
}
