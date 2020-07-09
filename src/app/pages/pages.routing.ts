import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'dashboard', pathMatch:'full' },
            { path: 'dashboard', loadChildren: () => import('app/pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' }  },          
            { path: 'membership', loadChildren: () => import('app/pages/membership/membership.module').then(m => m.MembershipModule), data: { breadcrumb: 'Membership' } },
            { path: 'ui', loadChildren: () => import('app/pages/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            { path: 'form-elements', loadChildren: () => import('app/pages/form-elements/form-elements.module').then(m => m.FormElementsModule), data: { breadcrumb: 'Form Elements' } },
            { path: 'tables', loadChildren: () => import('app/pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            { path: 'tools', loadChildren: () => import('app/pages/tools/tools.module').then(m => m.ToolsModule), data: { breadcrumb: 'Tools' } },
            { path: 'calendar', loadChildren: () => import('app/pages/calendar/app-calendar.module').then(m => m.AppCalendarModule), data: { breadcrumb: 'Calendar' } },
            { path: 'mailbox', loadChildren: () => import('app/pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            { path: 'maps', loadChildren: () => import('app/pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: () => import('app/pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: () => import('app/pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' }  },          
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);