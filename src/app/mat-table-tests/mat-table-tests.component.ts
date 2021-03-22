import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'mat-table-tests',
  templateUrl: './mat-table-tests.component.html',
  styleUrls: ['./mat-table-tests.component.scss']
})
export class MatTableTestsComponent implements OnInit {
  elData:iTable[] = [
    {
      id: 12,
      name: "Aaron"
    },
    {
      id: 22,
      name: "Babel"
    },
    {
      id: 32,
      name: "Dep"
    },
  ]

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource(this.elData);
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;

  }

}
interface iTable {
  id: number,
  name: string
}