import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { BlueDirective } from '../../../directives/blue.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbar, BlueDirective ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  name = 'Marcos Sales'
}
