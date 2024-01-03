import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobOffer } from '@app/core/models/job-offer';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private _http: HttpClient) { }

  public create(body: JobOffer) {
    return this._http.post<JobOffer>(`${environment.API_URL}/joboffers/create`, body);
  }
}
