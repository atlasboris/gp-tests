import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'mat-table-tests',
  templateUrl: './mat-table-tests.component.html',
  styleUrls: ['./mat-table-tests.component.scss']
})
export class MatTableTestsComponent implements OnInit {
  elData: iTable[] = [
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
    }
  ]

  displayedColumns: string[] = ['ID', 'NAME'];
  dataSource = new MatTableDataSource(this.elData);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  mock$: Observable<any>;
  displayedColumns2: string[] = [
    'name',
    'createdAt',
    'service',
    'allowedHosts', // restrictions
    'apiKey'
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.mock$ = of(mockData);
  }

}
interface iTable {
  id: number,
  name: string
}

interface IAPIKey {
  name?: string,
  createdAt?: string,
  service?: string
  allowedHosts?: string[],  // Restrictions
  apiKey?: string,

  id?: number,
  accountId?: number,
}

export const mockData: IAPIKey[] = [
  {
    name: 'aaaa',
    createdAt: 'aaaaaaaaaaaaaaa',
    service: 'avs',
    allowedHosts: ['a', 'b', 's'],
    apiKey: 'asfdasdfasfdsdf'
  },
  {
    name: 'bbbb',
    createdAt: 'new Date()',
    service: 'avs',
    allowedHosts: ['a', 'b', 's'],
    apiKey: 'asfdasdfasfdsdf'
  },
  {
    name: 'ccccc',
    createdAt: 'new Date()',
    service: 'avs',
    allowedHosts: ['a', 'b', 's'],
    apiKey: 'asfdasdfasfdsdf'
  }
]