import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PieComponent } from './pie/pie.component';
import { SafePipe } from './../../safe.pipe';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { BubbleComponent } from './bubble/bubble.component';

export const routes = [
  { path: '', redirectTo: 'pie', pathMatch: 'full'},
  { path: 'pie', component: PieComponent },
  { path: 'bar', component: BarComponent, data: { breadcrumb: 'Bar Charts' } },
  { path: 'line', component: LineComponent, data: { breadcrumb: 'Line Charts' } },
  { path: 'bubble', component: BubbleComponent, data: { breadcrumb: 'Bubble Charts' } }
];

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    DirectivesModule,
    Ng2GoogleChartsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PieComponent,
    SafePipe,
    BarComponent,
    LineComponent,
    BubbleComponent
  ]
})
export class ChartsModule { }
