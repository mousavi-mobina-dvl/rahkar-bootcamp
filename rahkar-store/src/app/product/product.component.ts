import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Getnameservice } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  items: any = [];
  constructor(private product: Getnameservice) {
    this.items = this.product.get();
    console.log(this.items);
  }
}
