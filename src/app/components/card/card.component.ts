import { Component } from '@angular/core';
import { PRODUCTS } from '../../products';
import { CommonModule } from '@angular/common';
import {CartService} from '../../service/cart.service'

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  products = PRODUCTS;
  filteredProducts = PRODUCTS;
  categories = [...new Set(PRODUCTS.map(product => product.category))];
  accordionStates: boolean[] = Array(this.products.length).fill(false);
  

  constructor(private cartService: CartService ){}

  filterByCategory(category: string): void {
    if (category === 'Todos') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        product => product.category === category
      );
    }
    this.accordionStates = Array(this.filteredProducts.length).fill(false);
  }
  toggleAccordion(index: number): void {
    this.accordionStates[index] = !this.accordionStates[index];
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

}
