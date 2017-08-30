import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'AT&T PVT',
        'Angular Admin Template with Bootstrap 4',
        {
            menu: 'vertical', //horizontal , vertical
            menuType: 'default', //default, compact, mini
            showMenu: true,
            navbarIsFixed: true,
            footerIsFixed: false,
            sidebarIsFixed: true,
            showSideChat: false,
            sideChatIsHoverable: true,
            skin:'combined'        
        }
    )
}