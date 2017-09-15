import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { single } from './../charts.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PieComponent {



  Chartssdata: any[] = [
    {
      title: 'Fail',
      Devices: ['Iphone', 'Samsung'],
      content: '2',
      colour: 'red'
    },
    {
      title: 'Running',
      Devices: ['Acer', 'Dell', 'HP'],
      content: '3',
      colour: 'blue',
      disabled: true
    },

    {
      title: 'Pass',
      Devices: ['Samsung'],
      content: '10',
      colour: 'green',
      removable: true
    },
    
  ];

  tittle = this.Chartssdata.map(function (a) { return a.title; });
  content = this.Chartssdata.map(function (a) { return a.content; });
  public doughnutChartType: string = 'doughnut';
   data2=_.flatMap(this.Chartssdata, obj=>{
    let rObj = []
    let lenghti = obj.Devices;
    for (var i = 0; i < Object.keys(obj.Devices).length; i++) {
      let dummy = { title: obj.title, content: obj.content, colour: obj.colour, Device: obj.Devices[i] };
      rObj.push(dummy);
    }
    return rObj;
   });


  public settings: Settings;
  public single: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor(public appSettings: AppSettings) {
    Object.assign(this, {single});
    this.settings = this.appSettings.settings
  };
  public onSelect(event) {
    console.log(event);
  };
  ngOnInit() {        
    this.settings.theme.showMenu = false
    //this.settings.theme.menuType = 'mini'; //or 'compact'
}
}
