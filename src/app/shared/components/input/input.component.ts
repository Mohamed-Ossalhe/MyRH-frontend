import { Component, Input } from '@angular/core';
import { InputType } from '@app/shared/types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {
  @Input() input!: InputType;
}
