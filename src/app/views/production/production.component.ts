import { MatButton } from '@angular/material/button';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';


@Component({
  selector: 'app-production',
  standalone: true,
  imports: [MatButton, ProductReadComponent],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {
  atributoLegal = "qualquer";

  soma = 2;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateToProductCreate():void{
    this.router.navigate(['/production/create'])
  }
}
