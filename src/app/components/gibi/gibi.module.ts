import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GibiRoutingModule } from './gibi-routing.module';
import { GibiIndexComponent } from './index/gibi-index.component';
import { GibiCreateComponent } from './create/gibi-create.component';
import { GibiEditComponent } from './edit/gibi-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GibiIndexComponent,
    GibiCreateComponent,
    GibiEditComponent
  ],
  imports: [
    CommonModule,
    GibiRoutingModule,
    FormsModule
  ]
})
export class GibiModule { }
