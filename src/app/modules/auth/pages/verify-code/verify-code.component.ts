import { Component } from '@angular/core';
import { InputType } from '@app/shared/types';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.less']
})
export class VerifyCodeComponent {
  verifyInput: InputType = {
    id: 'code',
    name: 'verifyCode',
    type: 'text',
    value: '',
    placeholder: 'Verification Code',
    label: 'Verification Code',
    formControll: "",
    onChange: "",
    required: true
  }
}
