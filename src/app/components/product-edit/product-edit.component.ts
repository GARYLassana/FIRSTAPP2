import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventDriverService } from 'src/app/services/event.driver.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productId: number;
  submitted: boolean = false;
  productFormGroup?: any;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private eventDriverService: EventDriverService) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.productsService.getProduct(this.productId).subscribe({
      next: (product) => {
        this.productFormGroup = this.fb.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required]
        })
      }
    })
  }


  onUpdateProduct() {
    this.productsService.updateProduct(this.productFormGroup?.value).subscribe(data => {
      this.eventDriverService.publishEvent({
        type: ProductActionsTypes.PRODUCTS_UPDATE
      })
      alert("success update product")
    })
  }
}
