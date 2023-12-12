import { Routes } from '@angular/router';
import { LorimComponent } from './lorim/lorim.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: 'lorim',
    component: LorimComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
];
