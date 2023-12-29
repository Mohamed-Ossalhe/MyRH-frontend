import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SearchBarComponent, ButtonComponent } from '@components/index';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
