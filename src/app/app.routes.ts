import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductionComponent } from './views/production/production.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';


export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },  
  {
    path: "production",
    component: ProductionComponent
  },
  {
    path: "production/create",
    component: ProductCreateComponent,
  },
  {
    path: "production/update/:id",
    component: ProductUpdateComponent,
  },
  {
    path: "production/delete/:id",
    component: ProductDeleteComponent
  }
];
