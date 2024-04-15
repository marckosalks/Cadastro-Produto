import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { Product } from '../product-model';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterLink],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent {
  products: Product[] = [];

  displayedColumns = ['id', 'name',  'price', 'action'];
  
  constructor(private productService: ProductService){
  }

  ngOnInit():void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }
}