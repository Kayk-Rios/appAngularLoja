import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit() {}

  // Método para calcular o preço total do carrinho
  totalPrice() {
    return this.cartService.getCart().reduce((total, product) => total + product.price, 0);
  }

  // Método para remover produto
  removeProduct(index: number) {
    this.cartService.getCart().splice(index, 1);
    this.cartService.updateCart(); // Atualiza o carrinho no armazenamento
  }

  // Método para comprar via WhatsApp
  buy() {
    const cart = this.cartService.getCart();
    let message = 'Eu gostaria de comprar os seguintes produtos: \n\n';

    cart.forEach(product => {
      message += `${product.title} - R$ ${product.price}\n`;
    });

    const whatsappUrl = `https://wa.me/5581981699096?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
