import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SearchBarComponent } from '@components/index';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
