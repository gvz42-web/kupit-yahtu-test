import {Component, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  size = input<'md'>('md')
  appearance = input<'link' | 'button'>('button')
  color = input<'primary' | 'black' | 'danger'>('primary')
}
