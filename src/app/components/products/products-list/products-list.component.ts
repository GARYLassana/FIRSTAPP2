import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$: Observable<AppDataState<Product[]>> | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit() {
  }
  /*
  // Ces methodes n'est plus utilisé avec la nouvelle utilisation de service
    onSelect(p: Product) {
      this.productEventEmitter.emit({
        type: ProductActionsTypes.SELECT_PRODUCTS,
        payload: p
      })
    }
    onDelete(p: Product) {
      this.productEventEmitter.emit({
        type: ProductActionsTypes.DELETE_PRODUCTS,
        payload: p
      })
    }
    onEdit(p: Product) {
      this.productEventEmitter.emit({
        type: ProductActionsTypes.EDIT_PRODUCTS,
        payload: p
      })
    }


    onActionEvent($event: ActionEvent) {
      this.productEventEmitter.emit($event);
    }
  */
}
