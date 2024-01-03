import { Component } from '@angular/core';
import { OfferStatus } from '@app/core/enums/offer-status';
import { JobOffer } from '@app/core/models/job-offer';
import { JobOfferService } from '@shared/services/job-offer/job-offer.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.less']
})
export class CreateJobComponent {
  
  constructor(private _jobOfferService: JobOfferService) {}

  formInputs = {
    title: {
      id: 'title',
      name: 'title',
      type: 'text',
      value: '',
      placeholder: 'Job Title',
      label: 'Job Title',
      formControll: 'title',
      onChange: "",
      required: true
    },
    description: {
      id: 'description',
      name: 'description',
      type: 'text',
      value: '',
      placeholder: 'Job Description',
      label: 'Job Description',
      formControll: 'description',
      onChange: "",
      required: true
    },
    profile: {
      id: 'profile',
      name: 'profile',
      type: 'text',
      value: '',
      placeholder: 'Job Profile',
      label: 'Job Profile',
      formControll: 'profile',
      onChange: "",
      required: true
    },
    address: {
      id: 'address',
      name: 'address',
      type: 'text',
      value: '',
      placeholder: 'Job Address',
      label: 'Job Address',
      formControll: 'address',
      onChange: "",
      required: true
    },
    educLevel: {
      id: 'educationalLevel',
      name: 'educationalLevel',
      type: 'text',
      value: '',
      placeholder: 'Educational Level',
      label: 'Educational Level',
      formControll: 'educationalLevel',
      onChange: "",
      required: true
    },
    salary: {
      id: 'salary',
      name: 'salary',
      type: 'number',
      value: '',
      placeholder: 'Job Salary',
      label: 'Job Salary',
      formControll: 'salary',
      onChange: "",
      required: true
    }
  }

  submitJob = () => {
    // let formData: FormData = new FormData();
    // formData.append("title", this.formInputs.title.value);
    // formData.append("description", this.formInputs.description.value);
    // formData.append("profile", this.formInputs.profile.value);
    // formData.append("address", this.formInputs.address.value);
    // formData.append("educationalLevel", this.formInputs.educLevel.value);
    // formData.append("salary", this.formInputs.salary.value);
    const jobOffer: JobOffer = new JobOffer(
      this.formInputs.title.value, 
      this.formInputs.description.value, 
      this.formInputs.profile.value,
      this.formInputs.address.value,
      this.formInputs.educLevel.value,
      parseInt(this.formInputs.salary.value),
      OfferStatus.PENDING,
      "56ad0816-b055-481d-902f-cbce23400c75",
      []
      );

    this._jobOfferService.create(jobOffer).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {}
    })
  }
}
