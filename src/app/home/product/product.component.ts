import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-es-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  image!: string;
  @Input()
  title!: string;
  @Input()
  price!: number;
  @Input()
  description!: string;
  @Input()
  isAddedToCart!: boolean;


  @Output()
  addToCart: EventEmitter<void> = new EventEmitter();

  public addProductToCart() {
    this.addToCart.emit();
  }
}
