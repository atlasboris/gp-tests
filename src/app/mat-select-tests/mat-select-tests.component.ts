import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export enum AccountStatus {
  PENDING,
  IN_REVIEW,
  ACTIVE,
  BLOCKED_BY_OPERATOR,
  BLOCKED_BY_SYSTEM,
  BLOCKED_BY_PAYMENT,
}

@Component({
  selector: 'mat-select-tests',
  templateUrl: './mat-select-tests.component.html',
  styleUrls: ['./mat-select-tests.component.scss']
})
export class MatSelectTestsComponent implements OnInit {
  accountStatus: any = AccountStatus;
  selectedValue: any;
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
    console.log(this.accountStatus);
  }

  onClick() {
    console.log("selection: ", this.selectedBranches)
    console.log("selection: ", AccountStatus)
  }

}

export interface iBranch {
  branchId: number,
  branchName: string
}