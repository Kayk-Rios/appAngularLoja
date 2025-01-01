import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    this.loadCartFromStorage(); // Carrega o carrinho armazenado ao inicializar
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.saveCartToStorage(); // Salva o carrinho sempre que adicionar um item
  }

  clearCart() {
    this.cart = [];
    this.saveCartToStorage();
  }
  public updateCart() {
    this.saveCartToStorage();
  }

  private saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCartFromStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }
}
