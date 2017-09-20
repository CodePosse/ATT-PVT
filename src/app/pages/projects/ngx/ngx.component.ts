import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ngx',
  templateUrl: './ngx.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NgxComponent {

  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  columns = [
    { prop: 'name' }
  ];

 constructor(private http: HttpClient) {
    this.fetch((data) => {
      console.log(data.devices);
      this.temp = [...data.devices];
      this.rows = data.devices;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }
/*********
  Fetch
**********/

  fetch(data) {
   /*const url = '/automationmanager/devices';
    this.http.get(url)
      .subscribe(data => {
      data(JSON.parse(data))
    })*/

    const req = new XMLHttpRequest();
    req.open('GET', '/automationmanager/devices');
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
