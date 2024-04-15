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
  selector: 'app-product-update',
  standalone: true,
  imports: [ 
    MatButton, 
    MatCardModule, 
    MatFormField,
    FormsModule,
    MatInput],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

  product: Product = {
    name: "",
    price: 0
  }

  constructor(private productService:ProductService,private router: Router,
    private route: ActivatedRoute
  ){ }

  //especificar que o id não veio zera
  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.productService.readById(id).subscribe( product  => {
        this.product = product;
      })
    }
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage("Produto atualizado com suceso!")
      this.router.navigate(["/production"]);
    });
  }

  cancel(): void{
    this.router.navigate(["/production"]);
  }

}
