import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import { NavbarComponent, SearchBarComponent, ButtonComponent, SelectComponent } from '@components/index';
=======
import { NavbarComponent, SearchBarComponent, ButtonComponent, SelectComponent, InputComponent, TableComponent } from '@components/index';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> Stashed changes



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
<<<<<<< Updated upstream
    SelectComponent
=======
    SelectComponent,
    InputComponent,
    TableComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    ButtonComponent,
<<<<<<< Updated upstream
    SelectComponent
=======
    SelectComponent,
    InputComponent,
    TableComponent
>>>>>>> Stashed changes
  ]
})
export class SharedModule { }
