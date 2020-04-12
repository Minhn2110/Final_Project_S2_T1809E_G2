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


  column = [
    {columnDef: 'checkBox', header: '', cell: element => ``},
    {columnDef: 'productName', header: 'Name', cell: element => `${element.name}`},
    {columnDef: 'type', header: 'Type', cell: element => `${element.type}`},
    {columnDef: 'price', header: 'Price', cell: element => `${element.price}`},
    {columnDef: 'addToCart', header: '', cell: element => ``},



  ]

  productList = [];
  selectedItems = [];
  

  displayedColumns = this.column.map(item => item.columnDef);
  filteredColumn = this.column.filter(item => {
    return item.columnDef !== 'checkBox' && item.columnDef !== 'addToCart'
  })

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    // console.log('displayedColumns', this.displayedColumns);
    console.log('filterColumns', this.filteredColumn);
    console.log('filterColumns', this.column);


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
      this.productList = item.data;
      console.log('data', item.data);
      this.dataSource = new MatTableDataSource(this.productList);
      this.dataSource.paginator = this.paginator;
    })
  }

  addItem(event, row) {
    // set checked in productList
    if(event.checked) {
      row.checked = event.checked
    } else {
      row.checked = false;
    }
    this.selectedItems = this.productList.filter(item => {
      return item.checked == true;
    });
    console.log(this.productList);

  }
  addToCart() {
    console.log(this.selectedItems);
    this.productList.forEach(item => {
      item.checked = false;
    });
    this.dataSource = new MatTableDataSource(this.productList);
    this.dataSource.paginator = this.paginator;
    this.selectedItems = [];

  }
}
