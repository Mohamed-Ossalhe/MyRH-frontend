import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@modules/home/home.module';
<<<<<<< Updated upstream
=======
import { AuthModule } from './auth/auth.module';
import { RecruiterModule } from './recruiter/recruiter.module';
>>>>>>> Stashed changes



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
<<<<<<< Updated upstream
    HomeModule
=======
    HomeModule,
    AuthModule,
    RecruiterModule
>>>>>>> Stashed changes
  ]
})
export class ModulesModule { }
