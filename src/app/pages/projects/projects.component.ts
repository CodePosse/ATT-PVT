import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Settings } from '../../app.settings.model';
import { AppSettings } from '../../app.settings';
import { Menu } from '../../theme/components/menu/menu.model';
import { MenuService } from '../../theme/components/menu/menu.service';
import 'rxjs/add/operator/debounceTime';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})



export class ProjectsComponent implements OnInit {
  public form:FormGroup;
  public title = "";
  public targets = ['_blank', '_self'];
  public settings: Settings;
  
  testCases = [];
  testDevices = [];
  projectTestcases = [];
  projectDevices = [];
  temp = [];
  selected = [];
  selectedTestCase = [];
  project = [];
  requestObject = [];
  projectName = "";
  state = "";
  createTime = "";
  btnName = "Save & Execute";
  editable = false;
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  TestToRemove: TestCaseToRemove = new TestCaseToRemove;
  editing = {};
  rows = [];
  


  @ViewChild(DatatableComponent) table: DatatableComponent;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  public icons = [
    { name: 'address-card-o', unicode: '&#xf2bc'},
    { name: 'bars', unicode: '&#xf0c9'},
    { name: 'bell-o', unicode: '&#xf0a2'},
    { name: 'calendar', unicode: '&#xf073'},
    { name: 'circle', unicode: '&#xf111'},
    { name: 'circle-o', unicode: '&#xf10c'},
    { name: 'cog', unicode: '&#xf013'},
    { name: 'comment', unicode: '&#xf075'},
    { name: 'comment-o', unicode: '&#xf0e5'},
    { name: 'credit-card', unicode: '&#xf09d'},
    { name: 'desktop', unicode: '&#xf108'},
    { name: 'exclamation-triangle', unicode: '&#xf071'},
    { name: 'folder', unicode: '&#xf07b'},
    { name: 'folder-o', unicode: '&#xf114'},
    { name: 'heart', unicode: '&#xf004'},
    { name: 'search', unicode:'&#xf002'}
  ]

  public menuItems:Array<Menu>;
  

  constructor(public fb:FormBuilder,
              public toastrService: ToastrService,
              public appSettings:AppSettings,
              private menuService:MenuService,
              private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router
              ) {

      this.settings = this.appSettings.settings;
      if(this.settings.theme.menu == 'vertical'){
        this.menuItems = this.menuService.getVerticalMenuItems();
      }





  }

  ngOnInit() {
    var projectName = "";
    var createTime = "";
    var state = "";
    this.route.params.subscribe( params => projectName=params['projectName'] );
    this.route.params.subscribe( params => createTime=params['createTime'] );
    this.route.params.subscribe( params => state=params['state'] );
    this.settings.theme.showMenu = true;



    console.log(projectName);
    if (projectName==undefined)
      this.title = 'Create a New Project';
    else
      {
        this.title = 'Rerun Project';
        this.projectName = projectName;
        this.createTime = createTime;
        this.editable =true;
        this.state = state;
        this.btnName = "Execute";
      }

      this.fetchProject((data) => {
       console.log('Project Detail',);
        console.log(data.devices);
        console.log(data.testcases);
        this.temp = [...data.devices];
        this.projectDevices = data.devices;
        this.projectTestcases = data.testcases;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
      });

    this.form = this.fb.group({
        title: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        routerLink: null,
        href: null,
        icon: null,
        target: null,
        hasSubMenu: false,
        parentId: 0
    });

  }

  ngAfterViewInit() {

    this.form.valueChanges.debounceTime(500).subscribe(menu => {
      if(menu.routerLink && menu.routerLink != ''){
        this.form.controls['href'].setValue(null);
        this.form.controls['href'].disable();
        this.form.controls['target'].setValue(null);
        this.form.controls['target'].disable();
      }
      else{
        this.form.controls['href'].enable();
        this.form.controls['target'].enable();
      }

      if(menu.href && menu.href != ''){
        this.form.controls['routerLink'].setValue(null);
        this.form.controls['routerLink'].disable();
        this.form.controls['hasSubMenu'].setValue(false);
        this.form.controls['hasSubMenu'].disable();
      }
      else{
        this.form.controls['routerLink'].enable();
        this.form.controls['hasSubMenu'].enable();
      }
    });

      console.log("this.state:::", this.state, this.state.length)
      //if (this.state == 'run')
      //{
        this.fetchProject((data) => {
         console.log('Project Detail');
          console.log(data.devices);
          console.log(data.testcases);
          this.temp = [...data.devices];
          this.projectDevices = data.devices;
          this.projectTestcases = data.testcases;
          setTimeout(() => { this.loadingIndicator = false; }, 30000);
        });
      //}


    this.fetchTestCases((data) => {
      console.log(data.testCase);
      this.temp = [...data.testCase];
      this.testCases = data.testCase;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });

    this.fetchDevices((data) => {
      console.log(data.devices);
      this.temp = [...data.devices];
      this.testDevices = data.devices;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });

  }
  /*********
    fetchTestCases
  **********/

    fetchTestCases(data) {
      const req = new XMLHttpRequest();
      req.open('GET', '/automationmanager/testcases');
      req.onload = () => {
        var tempJsonObject = JSON.parse(req.response);
        var JsonObject = {testCase: []};
        for(var i=0; i<tempJsonObject.length; i++){
          var testCase = tempJsonObject[i];
          var isChecked = false;
          if (this.checkLoadedCases(this.cleanUpTestCaseName(tempJsonObject[i].toString())))
            isChecked = true;
          JsonObject.testCase.push({testCase:testCase, checked: isChecked});
        };
        data(JsonObject);
      };
      req.send();
    }


    /*********
      isEditable
    **********/
    isEditable()
    {
      this.title = 'Edit Project';
      this.editable = false;
      this.state = "";
      this.btnName = "Save & Execute";
    }

    /*********
      checkLoadedCases
    **********/
    checkLoadedCases(item)
    {
    console.log("HEEEYYYYY");
    console.log(item);
    console.log(this.projectTestcases);
    console.log("DONE");

      for(var i=0; i<this.projectTestcases.length; i++)
      {
          console.log(this.projectTestcases[i].toUpperCase() + ":::::" + item.toString().toUpperCase());
          if (this.projectTestcases[i].toUpperCase() == item.toUpperCase())
            return true;
      }
      return false;
    }

    /*********
      fetchDevices
    **********/

      fetchDevices(data) {
        const req = new XMLHttpRequest();
        req.open('GET', '/automationmanager/devices');
        req.onload = () => {
          data(JSON.parse(req.response));
        };
        req.send();
      }
      /*********
        fetchProject
      **********/

        fetchProject(data) {
          this.http.get('/automationmanager/getProject/' + this.projectName + '/' + this.createTime,
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

 cleanUpTestCaseName(item)
 {
     var regex = new RegExp('\n', 'g');
     item =  item.replace(item[0], item[0].toLowerCase()).replace(/\s/g, '').replace('TV','Tv');
     item = item.replace('purchaseandStreamPPVMovie','streamPpvMovie');
     return item;
 }
  /****************************************************************
  **        onSubmit(menu:Object):void
  *****************************************************************/
  public onSubmit(menu:Object):void {
    if (this.form.valid) {
      let lastId = this.menuItems[this.menuItems.length-1].id;
      let newMenuItem = new Menu(lastId+1, menu['title'], menu['routerLink'], menu['href'], menu['icon'], menu['target'], menu['hasSubMenu'], parseInt(menu['parentId']));
      this.menuService.addNewMenuItem(this.menuItems, newMenuItem, this.settings.theme.menu);
      this.toastrService.success('New menu item successfully added !', menu['title'] );
      this.form.reset({
        hasSubMenu:false,
        parentId:0
      });
    }
    if(this.settings.theme.menuType=='mini'){
        jQuery('.menu-item-link').tooltip('enable');
    }else{
        jQuery('.menu-item-link').tooltip('disable');
    }
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

    onSelectTestCase(selectedTestCase) {
      console.log('Select Event', selectedTestCase, this.selectedTestCase);
      this.selectedTestCase.splice(0, this.selectedTestCase.length);
      this.selectedTestCase.push(selectedTestCase);
    }

    onActivate(event) {
      console.log('Activate Event', event);
    }

    parseTestCases(data)
    {
       var tempTestCases = "";
        data.forEach(item => {
                if (tempTestCases == '')
                  tempTestCases = '"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g,"").replace('TV','Tv')  + '":false';
                else
                  tempTestCases = tempTestCases + ',"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g, '').replace('TV','Tv')  + '":false'
        });
        //var tempTestCases = '';
        var regex = new RegExp('\n', 'g');
        this.TestToRemove.selectedTestCase.forEach(item => {
                if (tempTestCases == '')
                  tempTestCases = '"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g,"").replace('TV','Tv')  + '":true';
                else
                  tempTestCases = tempTestCases + ',"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g, '').replace('TV','Tv')  + '":true'
        });

        tempTestCases = '"testCases":{' + tempTestCases + '}';
        tempTestCases = tempTestCases.replace('purchaseandStreamPPVMovie','streamPpvMovie');
        var JSONString = JSON.stringify(this.requestObject);
        JSONString = JSONString.replace('"testCases":{}', tempTestCases);
        console.log(JSONString);
        return JSONString;

    }
    /****************************************************************
               submitForm

            createoreditprojects
    *****************************************************************/

    submitForm() {
     this.requestObject = [];
       //console.log("posting data....");
       //console.log("this Project:", this.projectName);
       //console.log ("selectedTestCase: ", this.TestToRemove.selectedTestCase);
       //console.log ("Devices:",this.selected);
       this.requestObject.push({
                  project: {
                  name:this.projectName,
                  location:[{
                  devices:{
                        ios_udids:[],android_udids:[]
                  }
                  }],
                  testCases:{}
                  }});
        var JSONString = JSON.stringify(this.requestObject);
        console.log(JSONString);

      // ----------- Find false checks
      var falseCases = [];
      this.testCases.forEach(item => {
              console.log(this.TestToRemove.selectedTestCase.indexOf(item.testCase));
              if (this.TestToRemove.selectedTestCase.indexOf(item.testCase) == -1)
              {
                console.log("FALSE:" + item.testCase);
                falseCases.push(item.testCase.replace(item.testCase[0], item.testCase[0].toLowerCase()).replace(/\s/g,""));
                console.log(falseCases);
              }
              else
                console.log("TRUE:" + item.testCase);
        });
      // ----------- Build TestCases
      var tempTestCases = '';
      var regex = new RegExp('\n', 'g');
      falseCases.forEach(item => {
              if (tempTestCases == '')
                tempTestCases = '"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g,"").replace('TV','Tv')  + '":false';
              else
                tempTestCases = tempTestCases + ',"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g, '').replace('TV','Tv')  + '":false'
      });
      //var tempTestCases = '';
      var regex = new RegExp('\n', 'g');
      this.TestToRemove.selectedTestCase.forEach(item => {
              if (tempTestCases == '')
                tempTestCases = '"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g,"").replace('TV','Tv')  + '":true';
              else
                tempTestCases = tempTestCases + ',"' + item.replace(item[0], item[0].toLowerCase()).replace(/\s/g, '').replace('TV','Tv')  + '":true'
      });

      tempTestCases = '"testCases":{' + tempTestCases + '}';
      tempTestCases = tempTestCases.replace('purchaseandStreamPPVMovie','streamPpvMovie');
      var JSONString = JSON.stringify(this.requestObject);
      JSONString = JSONString.replace('"testCases":{}', tempTestCases);
      console.log(JSONString);


      // ----------- Build Devices
      var tempSelectedAndriod = '';
      var tempSelectedIOS = '';
      this.selected.forEach(item => {
              if (item.deviceType == 'ios')
                if (tempSelectedIOS == '')
                  tempSelectedIOS = '"' + item.udid + '"';
                else
                  tempSelectedIOS = tempSelectedIOS + ',"' + item.udid + '"';
              else
                if (tempSelectedAndriod == '')
                  tempSelectedAndriod = '"' + item.udid + '"'
                else
                  tempSelectedAndriod = tempSelectedAndriod + ',"' + item.udid + '"'
      });

      if (tempSelectedIOS != '')
          tempSelectedIOS = '"ios_udids":[' + tempSelectedIOS + "]";

      if (tempSelectedAndriod != '')
          tempSelectedAndriod = '"android_udids":[' + tempSelectedAndriod + "]";

      if (tempSelectedIOS != '')
          tempSelectedAndriod = ',' + tempSelectedAndriod;

      //var JSONString = JSON.stringify(this.requestObject);

      JSONString = JSONString.replace('"ios_udids":[]', tempSelectedIOS);
      JSONString = JSONString.replace(',"android_udids":[]', tempSelectedAndriod);
      JSONString = JSONString.replace('"android_udids":[]', tempSelectedAndriod);
      JSONString = JSONString.replace(',}', '}');

      console.log(JSONString);
      console.log(JSON.parse(JSONString));


      let headers = new Headers();
      headers.append('content-type', 'application/json');

      JSONString = JSONString;

      if (this.state != 'run')
      {
            this.http.post('/automationmanager/createoreditprojects',
                JSONString.replace('[','').replace('}}}]','}}}'),
                {
                  headers: new HttpHeaders().set('content-type', 'application/json'),
                }
            )
                  .subscribe(
                    res => {
                      console.log(res);
                      //this.router.navigate(['/pages/charts/pie']);
                      this.router.navigate(['/pages/charts/pie']);
                    },
                    err => {
                      console.log("Error occured");
                    }
                  );
      }
      else
      {
          this.http.post('/automationmanager/reRunProject/',
              JSONString.replace('[','').replace('}}}]','}}}'),
              {
                headers: new HttpHeaders().set('content-type', 'application/json'),
              }
          )
                .subscribe(
                  res => {
                    console.log(res);
                    this.router.navigate(['/pages/charts/pie']);
                  },
                  err => {
                    console.log("Error occured");
                  }
                );


      }
     }
    AddOrRemoveTest (testCase, checked) {
            if (checked==true){
                this.TestToRemove.AddTest(testCase)
            }else {
                this.TestToRemove.RemoveTest(testCase)
            }
            console.log ("TestToRemove: ", this.TestToRemove, "this Project:", this.projectName)
        }
}
class TestCaseToRemove {
    selectedTestCase: any[];
    constructor( ) {
          this.selectedTestCase = [];
    }
    InAction: boolean = false;
    AddTest (selectedTestCase): void {
        if (!this.TestExists(selectedTestCase)){
            this.selectedTestCase.push(selectedTestCase);
        }
    }
    RemoveTest (selectedTestCase): void {
        for (var _i = 0; _i < this.selectedTestCase.length; _i++) {
            if (this.selectedTestCase[_i].id==selectedTestCase){
                this.selectedTestCase.splice( _i, 1 )
            }
        }
    }
    TestExists (selectedTestCase): boolean {
        let exists = false;
        for (var _i = 0; _i < this.selectedTestCase.length; _i++) {
            if (this.selectedTestCase[_i] ==selectedTestCase){
                exists = true;
            }
        }
        return exists;
    }
}
