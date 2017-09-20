import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './projects.component';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { SmartComponent } from './smart/smart.component';
import { NgxComponent } from './ngx/ngx.component';

export const routes = [
  { path: '', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'smart', component: SmartComponent, data: { breadcrumb: 'Smart DataTable' } },
  { path: 'ngx', component: NgxComponent, data: { breadcrumb: 'NGX DataTable' } },
  { path: 'Projects', component: ProjectsComponent, data: { breadcrumb: 'Projects' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RouterModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    DirectivesModule,
    NgbModule
  ],
  declarations: [
    ProjectsComponent,
    SmartComponent,
    NgxComponent
  ]
})
export class ProjectsModule { }
