import { RedDirective } from './../../../directives/red.directive';
import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, RouterLink, RedDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
