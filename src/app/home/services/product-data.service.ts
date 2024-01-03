import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map } from 'rxjs';
import { IProduct } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private httpClient: HttpClient) {}

  public getProductsStreamByPage(
    pageNumber: number,
    pageSize: number
  ): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(`${environment.apiBaseUrl}products`)
      .pipe(
        catchError(() => {
          return [];
        }),
        map((products: IProduct[]) => {
          return products.slice(
            (pageNumber - 1) * pageSize + 1,
            pageSize * pageNumber + 1
          );
        })
      );
  }
}
