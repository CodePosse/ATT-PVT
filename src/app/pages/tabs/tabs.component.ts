import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
 
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  tabsdata: any[] = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];
  constructor() {
   
   }

  ngOnInit() {
  }

}
