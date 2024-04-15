import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatToolbar, 
    MatSidenavModule, 
    MatListModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
