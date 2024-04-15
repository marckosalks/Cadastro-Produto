import { NavComponent } from './components/template/nav/nav.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    NavComponent,
    HeaderComponent,
    FooterComponent,

  ],
  templateUrl: 'app.component.html',
 
})
export class AppComponent {
  title = 'você vai conseguir um trabalho esse mês ainda!';
}
