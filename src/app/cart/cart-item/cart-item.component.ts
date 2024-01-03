import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-es-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input()
  image!: string;
  @Input()
  title!: string;
  @Input()
  price!: number;
  @Input()
  quantity!: number;

  @Output()
  quantityDecrement:EventEmitter<void> = new EventEmitter();

  @Output()
  quantityIncrement:EventEmitter<void> = new EventEmitter();

  @Output()
  removeItem:EventEmitter<void> = new EventEmitter();

  public onQuantityDecrement(): void {
    this.quantityDecrement.emit();
  }

  public onQuantityIncrement(): void {
    this.quantityIncrement.emit();
  }

  public onRemove():void{
    this.removeItem.emit();
  }
}
