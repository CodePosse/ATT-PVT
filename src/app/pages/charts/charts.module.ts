import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PieComponent } from './pie/pie.component';

export const routes = [
  { path: '', redirectTo: 'pie', pathMatch: 'full'},
  { path: 'pie', component: PieComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    DirectivesModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [
    PieComponent
  ]
})
export class ChartsModule1 { }