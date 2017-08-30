import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-testCases',
  templateUrl: './testCases.component.html',
  encapsulation: ViewEncapsulation.None
})
export class testCasesComponent {

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
      console.log(data.testCase);
      this.temp = [...data.testCase];
      this.rows = data.testCase;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }
/*********
  Fetch
**********/

  fetch(data) {
    const req = new XMLHttpRequest();
    req.open('GET', '/automationmanager/testcases');
    req.onload = () => {

      var tempJsonObject = JSON.parse(req.response);
      var JsonObject = {testCase: []};
      for(var i=0; i<tempJsonObject.length; i++){
        var testCase = tempJsonObject[i];
        JsonObject.testCase.push({testCase:testCase});
      };
      data(JsonObject);
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