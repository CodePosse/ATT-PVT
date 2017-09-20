import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router'
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],

  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  public title = "";
  projectName = "";
  state = "";
  createTime = "";
  selectedRow = false;
  testRuns = 0;
  failCount = 0;
  passCount = 0;


  public settings: Settings;
  tabsdata: any[] = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  testResults = [];
  testCases = [];
  devicesList = [];
  deviceResults = [];

  loadingIndicator= false;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {

   }

  ngOnInit() {

      var projectName = "";
      var createTime = "";
      var failCount = 0;
      var passCount = 0;
      this.route.params.subscribe( params => projectName=params['projectName'] );
      this.route.params.subscribe( params => createTime=params['createTime'] );
      this.route.params.subscribe( params => failCount=params['totalFail'] );
      this.route.params.subscribe( params => passCount=params['totalPass'] );
      //this.settings.theme.showMenu = true;
      console.log(projectName);
      if (projectName==undefined)
        this.title = 'NONE';
      else
        {
          this.title = 'Rerun Project';
          this.projectName = projectName;
          this.createTime = createTime;
          this.failCount = failCount;
          this.passCount = passCount;
          this.testRuns = Number(failCount) + Number(passCount);
        }


  }


ngAfterViewInit() {
      this.getProjectResults((data) => {
        console.log("  this.getProjectResults");
        console.log(data);
        this.testResults = data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);

        this.groupTestCases();
        console.log("this.testCases");
        console.log(this.testCases);
        this.groupDevicesList();
      });




};


/*****************************************
          onClickRow
 *****************************************/
onClickRow(deviceName)
{

    this.selectedRow = true;

    console.log(deviceName + "   H   E   R    E  !  ! ! ! ! ! !  ! ! ! !");
    for(var i=0; i < this.testCases.length;i++)
      for(var x=0; x < this.testResults.length;x++)
      {
         if (this.testResults[x][this.testCases[i].testCaseName] !== "undefined")
         {
              console.log(this.testResults[x]);
              console.log(this.testResults[x].deviceName + " === " + deviceName);
              if (this.testCases[i].testCaseName !== 'Device' && this.testCases[i].testCaseName !== 'Site')
                if (this.testCases[i].testCaseName === this.testResults[x].testCaseName
                            && this.testResults[x].deviceName === deviceName)
                {
                    this.testCases[i].errorMessage = this.testResults[x].errorMessage;
                    console.log("errorMessage :======>>>>" + this.testCases[i].errorMessage );
                }

          }
      }
}


/*****************************************
          groupTestCases
 *****************************************/
groupTestCases()
{
    this.testCases.push({testCaseName: 'Device'});
    this.testCases.push({testCaseName: 'Site'});
    console.log("this.testCases : ResultsLength", this.testResults.length);

    for(var i=0; i < this.testResults.length;i++) {
         var exists = false;
         for(var r=0; r < this.testCases.length;r++)
            if (this.testResults[i].testCaseName === this.testCases[r].testCaseName) {
               exists = true;
            }
          if (!exists)
              this.testCases.push({testCaseName: this.testResults[i].testCaseName});
    console.log(this.testCases);
    };
}

/*****************************************
          groupDevicesList
 *****************************************/
groupDevicesList()
{
    console.log("this.groupDevicesList : ResultsLength", this.testResults.length);

    for(var i=0; i < this.testResults.length;i++) {
         var exists = false;
         for(var r=0; r < this.devicesList.length;r++)
            if (this.testResults[i].deviceName === this.devicesList[r].Device) {
               this.devicesList[r][this.testResults[i].testCaseName] = this.testResults[i].testResultStatus;
               exists = true;
            }
          if (!exists)
          {
              var JSONString = '{"Device":"' +  this.testResults[i].deviceName + '", "Site":"LA", "deviceUdid":"' +  this.testResults[i].deviceUdid + '"  , "' + this.testResults[i].testCaseName + '":"' + this.testResults[i].testResultStatus + '"}';
              console.log(JSONString);
              var JSONObject = JSON.parse(JSONString);
              JSONObject["errorMessage"] =  this.testResults[i].errorMessage;
              console.log(JSONObject);
              this.devicesList.push(JSONObject);

          };
    console.log(this.devicesList);
    };
}

 /*****************************************
           getProjectResults
  *****************************************/


   getProjectResults(data)
   {
       this.http.post('/automationmanager/projectResults',
                  '{"name": "' + this.projectName + '","timeCreated":"' + this.createTime + '"}',
                 {
                   headers: new HttpHeaders().set('content-type', 'application/json'),
                 }
           )
             .subscribe(
               res => {
                 console.log(res);
                 data(res);
               },
               err => {
                 console.log("Error occured");
               }
             );

   }

}
