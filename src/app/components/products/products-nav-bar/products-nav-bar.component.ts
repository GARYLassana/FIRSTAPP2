import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/services/event.driver.service';
import { ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.scss']
})
export class ProductsNavBarComponent implements OnInit {

  // @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit() {

  }

  onGetAllProducts() {
    // Sans le service
    // this.productEventEmitter.emit({
    //   type: ProductActionsTypes.GET_ALL_PRODUCTS,
    //   payload: null
    // });

    // En créant un service
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.GET_ALL_PRODUCTS
    });
  }

  onGetSelectedProducts() {
    // Sans le service
    // this.productEventEmitter.emit({
    //   type: ProductActionsTypes.GET_SELECTED_PRODUCTS
    // });

    // En créant un service
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.GET_SELECTED_PRODUCTS
    });
  }
  onGetAvailableProducts() {
    // Sans le service
    // this.productEventEmitter.emit({
    //   type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS
    // });

    // En créant un service
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS
    });
  }
  onNewProduct() {
    // Sans le service
    // this.productEventEmitter.emit({
    //   type: ProductActionsTypes.NEW_PRODUCTS
    // });

    // En créant un service
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.NEW_PRODUCTS
    });
  }

  onSearch(dataForm: any) {
    // Sans le service
    // this.productEventEmitter.emit({
    //   type: ProductActionsTypes.SEARCH_PRODUCTS,
    //   payload: dataForm
    // });

    // En créant un service
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.SEARCH_PRODUCTS,
      payload: dataForm
    });
  }
}
