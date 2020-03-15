import { Component, OnInit, ViewChild } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss']
})
export class TableProductComponent implements OnInit {

  constructor() { }

  displayedColumns = [
    {ColumnDef: 'Id', header: '', cell: (item) => `${item.id}`}
  ];
  // displayedColumns = ['Id'];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.getData();
  }
  getData() {
    const url = 'https://lit-ravine-56602.herokuapp.com/api/product';
    ajax({
      url: url,
      method: 'GET',
      responseType: "json",
      body: {}
    }).pipe(
      map(response => response.response),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    ).subscribe(item => {
      console.log('data', item);
      this.dataSource = new MatTableDataSource(item.data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
