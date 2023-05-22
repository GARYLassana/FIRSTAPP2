import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  /* Première manière d'utiliser Observable
    products!: Product[];
    errorMessage!: string;
  */

  /* Dexième manière d'utiliser Observable
    products$!: Observable<Product[]>;
  */

  // Troisième manière d'utiliser Observable avec gestion des erreurs
  products$!: Observable<AppDataState<Product[]>>;
  readonly DataStateEnum = DataStateEnum;

  constructor(
    private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * @file récuperation de tous les données
   */
  onGetAllProduct() {
    /*Première manière d'utiliser Observable
      this.productService.getAllProducts().subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (err) => {
          this.errorMessage = err;
        }
      })
    */

    /* Dexième manière d'utiliser Observable
       this.products$ = this.productService.getAllProducts();
    */

    /* Troisième manière d'utiliser Observable avec gestion des erreurs */
    this.products$ = this.productService.getAllProducts().pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }

  /**
   * @file récuperation des données selectionnées
   */
  onGetSelectedProduct() {
    this.products$ = this.productService.getSelectedProducts().pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }

  /**
   * @file récuperation de données invalide
   */
  onGetAvailableProduct() {
    this.products$ = this.productService.getAvailableProducts().pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    )
  }

  /**
   * @file le formulaire de recherche des produits
   */
  onSearch(dataForm: any) {
    this.products$ = this.productService.searchProducts(dataForm.keyword).pipe(
      map(data => {
        console.log(data);
        return ({ dataState: DataStateEnum.LOADED, data: data });
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    );
  }

  /**
   * @file selection un produit
   * @param p
   */
  onSelect(p: Product) {
    this.productService.selectProduct(p).subscribe(data => {
      p.selected = data.selected;
    });
  }


  /**
   * @file supprimer un produit
   * @param p
   */
  onDelete(p: Product) {
    let alert = confirm('Etes vous sûr de vouloir supprimer ?');
    if (alert = true) {
      this.productService.deleteProduct(p).subscribe(data => {
        this.onGetAllProduct();
      });
    }
  }

  /**
   * @file ajout d'un nouveau produit
   */
  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

  onEdit(p: Product) {
    this.router.navigateByUrl("/editProduct/" + p.id);
  }
}
