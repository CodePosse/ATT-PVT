import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { single } from './../charts.data';
import { AppSettings } from "../../../app.settings";
import { Settings } from "../../../app.settings.model";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PieComponent {
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
