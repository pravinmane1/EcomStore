import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/interfaces';
import { ProductDataService } from '../services/product-data.service';
import { finalize } from 'rxjs';
import { CartDataService } from '../../core/services/cart-data.service';

@Component({
  selector: 'app-es-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];
  public isFetchingProducts = false;
  private productsPageNumber = 1;
  private productPageSize = 6;

  constructor(
    private productService: ProductDataService,
    private cartDataService: CartDataService
  ) {}

  ngOnInit(): void {
    this.fetchProductsByPageNumber(this.productsPageNumber);
  }

  public onScrollDown(): void {
    this.productsPageNumber++;
    this.fetchProductsByPageNumber(this.productsPageNumber);
  }

  public onAddToCart(product: IProduct): void {
    this.cartDataService.addProduct(product);
  }

  public isAddedToCart(id: number): boolean {
    return !!this.cartDataService.getCartItemById(id);
  }

  private fetchProductsByPageNumber(productsPageNumber: number) {
    this.isFetchingProducts = true;
    this.productService
      .getProductsStreamByPage(productsPageNumber, this.productPageSize)
      .pipe(
        finalize(() => {
          this.isFetchingProducts = false;
        })
      )
      .subscribe((products: IProduct[]) => {
        this.products.push(...products);
      });
  }
}
