import { ProductionComponent } from './../../views/production/production.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product-model';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string){
    console.log(this.snackBar.open(msg, '200 (OK)', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    }));
  }

  create(product: Product):Observable <Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  //criando novo metodo!

  //trás um produto em especifico
  readById(id: String): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }


  //atualiza produto em especifico
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  // aqui vou criar função para deletar produto!

  delete(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url);
  }

}
