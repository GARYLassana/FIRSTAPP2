import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGetAllProduct() {
    this.productEventEmitter.emit(ProductActionsTypes.GET_ALL_PRODUCTS);
  }

  onGetSelectedProduct() {

  }
  onGetAvailableProduct() { }
  onNewProduct() { }
}
