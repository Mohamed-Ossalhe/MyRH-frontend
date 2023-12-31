import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SearchBarComponent, ButtonComponent, SelectComponent } from '@components/index';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent
  ]
})
export class SharedModule { }
