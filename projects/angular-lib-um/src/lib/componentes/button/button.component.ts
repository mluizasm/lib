import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [NgClass],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input()
  public variant!: 'primary' | 'secundary'

  @Input()
  public size: 'sm' | 'md' | 'lg' = 'md'

}
