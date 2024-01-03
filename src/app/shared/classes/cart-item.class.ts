import { IProduct } from '../interfaces';

export default class CartItem implements IProduct {
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;

  constructor(product: IProduct, quantity: number = 1) {
    this.description = product.description;
    this.id = product.id;
    this.image = product.image;
    this.price = product.price;
    this.title = product.title;
    this.quantity = quantity;
  }

  public incrementQuantity(): void {
    this.quantity++;
  }
  public decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  public getValue(): number {
    return this.price * this.quantity;
  }
}
