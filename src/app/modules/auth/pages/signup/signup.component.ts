import { Component } from '@angular/core';
import { InputType } from '@app/shared/types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent {
  emailInput: InputType = {
    id: 'email',
    name: 'email',
    type: 'email',
    value: '',
    placeholder: 'Email',
    label: 'Email',
    required: false
  }
}
