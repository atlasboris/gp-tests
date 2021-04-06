import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mat-select-tests',
  templateUrl: './mat-select-tests.component.html',
  styleUrls: ['./mat-select-tests.component.scss']
})
export class MatSelectTestsComponent implements OnInit {
  branchesList: iBranch[] = [
    {
      branchId: 111,
      branchName: 'Yavne'
    },
    {
      branchId: 2222,
      branchName: 'Tel Aviv'
    },
    {
      branchId: 333,
      branchName: 'Rishon'
    },
  ];

  selectedBranches = new FormControl();

  ngOnInit(): void {
  }

  onClick(){
    console.log("selection: ", this.selectedBranches)
  }

}

export interface iBranch {
  branchId: number,
  branchName: string
}