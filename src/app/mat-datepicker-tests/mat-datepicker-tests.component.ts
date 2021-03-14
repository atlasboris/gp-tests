import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mat-datepicker-tests',
  templateUrl: './mat-datepicker-tests.component.html',
  styleUrls: ['./mat-datepicker-tests.component.scss']
})
export class MatDatepickerTestsComponent implements OnInit {
  // picker = new FormControl(); 
  // @ViewChild('picker', {static: true}) picker: ElementRef;
  // range = new FormGroup({
  //   start: new FormControl(),
  //   end: new FormControl()
  // });
  constructor() { }

  ngOnInit(): void {
    
  }

}
