import { Component } from '@angular/core';
import { CartDataService } from '../../core/services/cart-data.service';
import { CartItem } from '../../shared/classes';

@Component({
  selector: 'app-es-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cartItems: CartItem[];

  constructor(private cartDataService: CartDataService) {
    this.cartItems = this.cartDataService.getCartItems();
  }

  public onRemoveItem(id: number) {
    this.cartDataService.removeProduct(id);
  }

  public onQuantityDecrement(cartItem: CartItem): void {
    cartItem.decrementQuantity();
  }

  public onQuantityIncrement(cartItem: CartItem): void {
    cartItem.incrementQuantity();
  }

  public isCartEmpty(): boolean {
    return !(this.cartItems && this.cartItems.length);
  }

  public get totalCartValue(): number {
    return this.cartDataService.getCartValue();
  }
}
