import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public settings: Settings;
    constructor(public appSettings: AppSettings, private router: Router, private http: HttpClient) {
        this.settings = this.appSettings.settings;
    }
}
