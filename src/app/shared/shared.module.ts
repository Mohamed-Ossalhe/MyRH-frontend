import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SearchBarComponent, ButtonComponent, SelectComponent } from '@components/index';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent
  ]
})
export class SharedModule { }
