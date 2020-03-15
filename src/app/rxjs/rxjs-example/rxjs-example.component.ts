import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { fromEvent, from, of } from 'rxjs';
import { map, tap, debounce, debounceTime, distinctUntilChanged, distinct, distinctUntilKeyChanged, switchMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: "app-rxjs-example",
  templateUrl: "./rxjs-example.component.html",
  styleUrls: ["./rxjs-example.component.scss"]
})
export class RxjsExampleComponent implements OnInit , AfterViewInit {
  @ViewChild('searchInput', { static : true}) searchInput : ElementRef;
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {
    // this.test(); 
    // this.asyncAwaitAPI();
    this.fromRxjs();
  }
  async asyncAwaitAPI() {
    const url = 'https://api.github.com/users';
    const api1 = await $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: url,
      data: "",
    })
    .done((data) => {
      if(data) {
        return data;
      }
    })
    .fail((err) => {
      console.log('eror', err);
    })
    .always(() => {
      console.log('completed')
    })

    const api2 = await $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: url,
      data: "",
    })
    .done((data) => {
      if(data) {
        return data;
      }
    })
    .fail((err) => {
      console.log('eror 2', err);
    })
    .always(() => {
      console.log('completed 2')
    })
    console.log('api1', api1);
    console.log('api2', api2);
  }
  test() {
    const url = 'https://api.github.com/users';
    const getData =  new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: url,
      }).done((data) => {
        resolve(data);
      });
    })
    const getData1 =  new Promise((resolve, reject) => {
      setTimeout(() => {
        $.ajax({
          type: "GET",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          url: url,
        }).done((data) => {
          resolve(data);
        });
      }, 5000);
    })
    // Can use await Promise instead Promise all

    return Promise.all([getData, getData1]).then((data) => {
      console.log(data);
    })
  }
  promiseAngular() {
    const url = 'https://api.github.com/users';
    let api1 = this.http.get(url).toPromise();
    let api2 = this.http.get(url).toPromise();
    Promise.all([api1,api2]).then(res => console.log(res));
  }
  ngAfterViewInit(){
    fromEvent<any>(this.searchInput.nativeElement, 'keyup').pipe(
      // tap(
      //   // ev => console.log(ev)
      //   ),
      map(event => event.target.value),
      debounceTime(200),
      distinctUntilChanged(), // differrent at Enter
      // distinct(), // compare all
      switchMap((value) => {
        // return of(value);
        return ajax({
          url: `https://api.github.com/users`,
          method: 'GET',
        }).pipe(catchError(err => of(err)));
      })
      ).subscribe(val => {
        if(val) {
          console.log(val);
        }
      });

      // from([1,1,1,1,1,1]).pipe(
      //   distinct()
      // ).subscribe(val => console.log(val));
  }
  fromRxjs() {
  }
}
