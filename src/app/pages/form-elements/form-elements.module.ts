import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { ControlsComponent } from './controls/controls.component';
import { FileUploaderComponent } from './controls/file-uploader/file-uploader.component';
import { ImageUploaderComponent } from './controls/image-uploader/image-uploader.component';
import { MultipleImageUploaderComponent } from './controls/multiple-image-uploader/multiple-image-uploader.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ValidationsComponent } from './validations/validations.component';

export const routes = [
  { path: '', redirectTo: 'controls', pathMatch: 'full'},
  { path: 'controls', component: ControlsComponent, data: { breadcrumb: 'Form Controls' } },
  { path: 'layouts', component: LayoutsComponent, data: { breadcrumb: 'Layouts' } },
  { path: 'validations', component: ValidationsComponent, data: { breadcrumb: 'Validations' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectDropdownModule,
    NgbModule,
    CustomFormsModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ControlsComponent,
    FileUploaderComponent,
    ImageUploaderComponent,
    MultipleImageUploaderComponent,
    LayoutsComponent,
    ValidationsComponent
  ]
})
export class FormElementsModule { }
