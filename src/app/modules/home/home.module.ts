import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { JobOffersComponent } from './pages/job-offers/job-offers.component';
import { JobOfferCardComponent, JobPreviewCardComponent, JobOffersSearchComponent } from './components';



@NgModule({
  declarations: [
    HomeComponent,
    JobOffersComponent,
    JobOfferCardComponent,
    JobPreviewCardComponent,
    JobOffersSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
