import { Injectable } from '@angular/core';
import { CartItem } from '../../shared/classes';
import { IProduct } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  private cartItems: CartItem[];

  constructor() {
    this.cartItems = [];
  }

  public addProduct(product: IProduct) {
    const cartItem = new CartItem(product);
    this.cartItems.push(cartItem);
  }

  public removeProduct(id: number) {
    const removeIndex = this.cartItems.findIndex(
      (cartItem) => cartItem.id === id
    );
    this.cartItems.splice(removeIndex, 1);
  }

  public getCartItems(): CartItem[] {
    return this.cartItems;
  }

  public getCartItemById(id: number): CartItem {
    return this.cartItems.find((cartItem) => cartItem.id === id)!;
  }

  public getCartValue(): number {
    return this.cartItems.reduce((totalValue, cartItem) => {
      totalValue += cartItem.getValue();
      return totalValue;
    }, 0);
  }
}
