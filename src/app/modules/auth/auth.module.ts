import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '@modules/auth/pages/auth/auth.component';
import { SignupComponent } from '@modules/auth/pages/signup/signup.component';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthModule { }
