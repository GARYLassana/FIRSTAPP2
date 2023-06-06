import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/services/event.driver.service';
import { ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | null = null;
  //@Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  constructor(
    private eventDriverService: EventDriverService
  ) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    // this.eventEmitter.emit({
    //   type: ProductActionsTypes.SELECT_PRODUCTS,
    //   payload: product
    // })
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.SELECT_PRODUCTS,
      payload: product
    })
  }
  onEdit(product: Product) {
    // this.eventEmitter.emit({
    //   type: ProductActionsTypes.EDIT_PRODUCTS,
    //   payload: product
    // })

    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.EDIT_PRODUCTS,
      payload: product
    })
  }
  onDelete(product: Product) {
    // this.eventEmitter.emit({
    //   type: ProductActionsTypes.DELETE_PRODUCTS,
    //   payload: product
    // })
    this.eventDriverService.publishEvent({
      type: ProductActionsTypes.DELETE_PRODUCTS,
      payload: product
    })
  }
}
