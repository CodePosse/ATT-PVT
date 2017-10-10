import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { single } from './../charts.data';
import { AppSettings } from "../../../app.settings";
import { Settings } from "../../../app.settings.model";
import { HttpClient} from '@angular/common/http';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from './../../../safe.pipe';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [SafePipe]
})

export class PieComponent {
  public settings: Settings;
  public single: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#81F7F3', '#AC58FA', '#FF00FF', '#0096A6', '#FA5882', '#606060']
  }
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  editing = {};
  timer;
  executionStatus = [];
  executionSummary = [];
  deviceURLs = [];
  totalTest = 0;
  temp = [];
  selected = [];
  pieChartString = ''
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  iphone = 'http://tinyurl.com';
  projectNameAndTestCases =[];
  testCases = [];
  projectName = '';
  pieChartData =  {
        chartType: 'PieChart',
        dataTable: [
          ['Device Results', 'Count Per Test'],
          ['loading', 1],
        ],
        options: {title: 'Device Results', pieHole:0.4,legend: { position: 'bottom', alignment: 'end' },
                            colors: ['#f6c7b6'],
                            'animation': { duration: 1000, easing: 'out' }},
    };
  sampleHTML = "<div><iframe width='640' height='360' src='https://youtu.be/kUTYSyd3LR0' frameborder='0' allowfullscreen></iframe></div>";
 urlIP = "player.twitch.tv/?channel=lreevesiphone&amp;player=facebook&amp;autoplay=true";
 urlAN = "29";



  constructor(public appSettings: AppSettings, private http: HttpClient, protected sanitizer: DomSanitizer, private safe:SafePipe) {
    Object.assign(this, {single});
    this.settings = this.appSettings.settings;


    this.fetchStatusList((data) => {
      console.log(data.executionStatus);
      this.executionStatus = data.executionStatus;
      console.log(this.executionStatus[0].projectName)
      this.projectNameAndTestCases = this.executionStatus[0].projectName.split("|");
      console.log(this.projectNameAndTestCases.slice(1));
      this.testCases =this.projectNameAndTestCases.slice(1);
      this.projectName = this.projectNameAndTestCases[0];
      setTimeout(() => { this.loadingIndicator = false; }, 1500);

      this.deviceURLs= this.executionStatus
      console.log(this.deviceURLs);
    });

    this.fetchSummaryList((data) => {
      console.log(data.executionSummary);
      this.executionSummary = data.executionSummary;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
      for(var i=0; i<this.executionSummary.length; i++)
      {
        this.totalTest += this.executionSummary[i].Count;
        console.log(" Count:", this.totalTest)
      }
      this.buildChart();
    });
  };

  /*********
      buildChart
  **********/
  buildChart()
  {

                  this.totalTest = 0;

                  var passCount = 0;
                  var failCount = 0;
                  var InProgressCount = 0;
                  var passName = '';
                  var failName = '';
                  var inProgressName = '';

                  for(var i=0; i<this.executionSummary.length; i++)
                  {
                    this.totalTest += this.executionSummary[i].Count;
                    console.log(" Count:", this.totalTest)
                    if (this.executionSummary[i].Status == 'Complete')
                    {
                      passCount = this.executionSummary[i].Count;
                      passName = this.executionSummary[i].Count + ' - Complete';
                    }
                    else if(this.executionSummary[i].Status  == 'FAILED')
                    {
                      failCount  = this.executionSummary[i].Count;
                      failName  = this.executionSummary[i].Count + ' - ' + this.executionSummary[i].Status;
                    }
                    else if(this.executionSummary[i].Status  == 'SKIP')
                    {
                      failCount  = this.executionSummary[i].Count;
                      failName  = this.executionSummary[i].Count + ' - ' + this.executionSummary[i].Status;
                    }
                    else
                    {
                      InProgressCount  = this.executionSummary[i].Count;
                      inProgressName  = this.executionSummary[i].Count + ' - IN PROGRESS';
                    }
                  }
                  this.pieChartData =  {
                    chartType: 'PieChart',
                    dataTable: [
                      ['Device Results', 'Count Per Test'],
                      [passName,     passCount],
                      [failName,      failCount],
                      [inProgressName,  InProgressCount]
                    ],
                      options: {title: ' ',
                      legend: { position: 'bottom', alignment: 'end' },
                      colors: ['green', 'red', 'lightblue', 'yellow', '#f6c7b6'],
                      pieHole:0.4,
                      animation: { duration: 1000, easing: 'out' }}
                  };
  }
  /*********
    Fetch Status List
  **********/

    fetchStatusList(data) {
      const req = new XMLHttpRequest();
      req.open('GET', '/automationmanager/executionStatusList');
      req.onload = () => {

        console.log(req.response);
        data(JSON.parse(req.response));
      };
      req.send();
    }

    /*********
      cleanURL
    **********/
    cleanURL(oldURL){
      return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    }
    /*********
      Fetch Summary List
    **********/

      fetchSummaryList(data) {
        const req = new XMLHttpRequest();
        req.open('GET', '/automationmanager/executionSummaryList');
        req.onload = () => {
          console.log(req.response);
          data(JSON.parse(req.response));
        };
        req.send();
      }
  public onSelect(event) {
    console.log(event);
  };
  ngOnInit() {
    this.settings.theme.showMenu = false
    this.pieChartData =  {
          chartType: 'PieChart',
          dataTable: [
            ['Device Results', 'Count Per Test'],
            ['loading', 1],
          ],
          options: {title: 'Device Results', pieHole:0.4,legend: { position: 'bottom', alignment: 'end' },
                              colors: ['#f6c7b6'],
                              'animation': { duration: 1000, easing: 'out' }},
      };
    //this.autoRefresh();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  timeString : string;
      // duration = 10*60;
      duration = 5;
      seconds = "--";
      minutes = "--";
      clockDisplay : string;
      interval: number;


      autoRefresh(){
          if(this.duration > 0){
              setInterval( () => {this.duration = this.duration - 1;
              this.fetchStatusList((data) => {
                console.log(data.executionStatus);
                this.executionStatus = data.executionStatus;
                console.log(this.executionStatus[0].projectName)
                this.projectNameAndTestCases = this.executionStatus[0].projectName.split("|");
                console.log(this.projectNameAndTestCases.slice(1));
                this.projectName = this.projectNameAndTestCases[0];
                setTimeout(() => { this.loadingIndicator = false; }, 1500);

              });

              this.fetchSummaryList((data) => {
                console.log(data.executionSummary);
                this.executionSummary = data.executionSummary;
                this.timer = setTimeout(() => { this.loadingIndicator = false; }, 1500);
                this.buildChart();

              });

              },10000);
              }
  }

}
