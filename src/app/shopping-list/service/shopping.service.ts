import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product-model';
import { PriceRange } from '../model/price-range.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) {}

 public getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/product.json');
  }

  public getPriceRange(): Observable<PriceRange> {
    return this.http.get<PriceRange>('/assets/priceRange.json');
  }

}
