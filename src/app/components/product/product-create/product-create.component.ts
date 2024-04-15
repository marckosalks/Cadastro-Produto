import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Product } from '../product-model';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    MatButton, 
    MatCardModule, 
    MatFormField,
    FormsModule,
    MatInput
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  
  product: Product = {
    name: "",
    price: 0
  }
  
  constructor(private productService: ProductService,
    private router: Router){ }

  ngOnInit(): void {

  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage("Produto criado!");
      this.router.navigate(["/production"])  
    })
  }

  cancel(): void {
    this.router.navigate(["/production"])
  }
}
