import { ProductService } from './../product.service';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Product } from '../product-model';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    MatButton, 
    MatCardModule, 
    MatFormField,
    FormsModule,
    MatInput
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {
  product: Product = {
    name: '',
    price: 0
  }
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){  }

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get("id");
    if(id !== null){
      this.productService.readById(id).subscribe( product => {
       this.product = product;
      })
    }
  }

  DeleteProduct():void{
    this.productService.delete(this.product).subscribe(()=>{
      this.productService.showMessage("Produto apagado com sucesso!");
      this.router.navigate(["/production"]);
    })
  }

  //voltar 
  goBack():void{
    this.router.navigate(["/production"])
  }
}
