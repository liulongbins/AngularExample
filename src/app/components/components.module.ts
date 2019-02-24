import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { RouterModule } from '@angular/router';
import { BreadComponent } from './bread/bread.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { FormsModule } from '@angular/forms';
import { TableBorderedComponent } from './table-bordered/table-bordered.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MenuComponent,
    BreadComponent,
    SelectInputComponent,
    TableBorderedComponent,
  ],
  exports: [
    MenuComponent,
    BreadComponent,
    SelectInputComponent,
    TableBorderedComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
  ],
})
export class ComponentsModule { }
