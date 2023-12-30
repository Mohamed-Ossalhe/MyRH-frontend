import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SearchBarComponent, ButtonComponent, SelectComponent } from '@components/index';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent
  ]
})
export class SharedModule { }
