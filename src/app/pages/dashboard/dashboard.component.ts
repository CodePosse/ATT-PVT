import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {

  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

 constructor(private http: HttpClient) {
    this.fetch((data) => {
      console.log(data);
      this.temp = [...data];
      this.rows = data
      console.log(this.rows);
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }
/*********
  Fetch
**********/

  fetch(data) {
   /*const url = '/automationmanager/homepageProjects';
    this.http.get(url)
      .subscribe(data => {
      data(JSON.parse(data))
    })*/

    const req = new XMLHttpRequest();
    req.open('GET', '/automationmanager/homepageProjects');
    req.onload = () => {
      data(JSON.parse(req.response));
    };
    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
