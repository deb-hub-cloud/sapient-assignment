import { Component, OnInit } from '@angular/core';
import { forkJoin, range } from 'rxjs';
import { PriceRange } from '../model/price-range.model';
import { Product } from '../model/product-model';
import { ShoppingService } from '../service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public grid: boolean = true;
  public products: Product[] = [];
  public selectedRange: string = 'All Data';
  public priceRanges: string[] = [];

  constructor(private shoppingService: ShoppingService) { }

  public ngOnInit(): void {
    forkJoin([this.shoppingService.getProductList()
      , this.shoppingService.getPriceRange()
    ]).subscribe(([products, priceRange]: [Product[], PriceRange]) => {
      this.products = products;
      this.priceRanges = priceRange.ranges;
    })
  }
}

