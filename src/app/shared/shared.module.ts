import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SearchBarComponent, ButtonComponent, SelectComponent, InputComponent } from '@components/index';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
