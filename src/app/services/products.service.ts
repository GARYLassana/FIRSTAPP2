import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {

  }

  /**
   * @file La methode qui permet de recuperer l'ensemble des produits
   * @returns
   */
  getAllProducts(): Observable<Product[]> {
    let host = (Math.random() > 0.1) ? environment.host : environment.unreachableHost;
    return this.http.get<Product[]>(host + "/products");
  }

  /**
   * @file La methode qui permet de recuperer de(s) produit(s) selection(s)
   * @returns
   */
  getSelectedProducts(): Observable<Product[]> {
    let host = (Math.random() > 0.1) ? environment.host : environment.unreachableHost;
    return this.http.get<Product[]>(host + "/products?selected=true");
  }

  /**
 * @file La methode qui permet de recuperer de(s) produit(s) selection(s)
 * @returns
 */
  getAvailableProducts(): Observable<Product[]> {
    let host = (Math.random() > 0.1) ? environment.host : environment.unreachableHost;
    return this.http.get<Product[]>(host + "/products?available=true");
  }

  /**
 * @file La methode qui permet d'effectuer la recherche
 * @returns
 */
  searchProducts(keyword: string): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?name_like =" + keyword);
  }

  /**
 * @file La methode qui permet de selectionner un produit
 * @returns
 */
  selectProduct(product: Product): Observable<Product> {
    let host = environment.host;
    product.selected = !product.selected;
    return this.http.put<Product>(host + "/products/" + product.id, product);
  }

  /**
 * @file La methode qui permet de supprimer un produit
 * @returns
 */
  deleteProduct(product: Product): Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host + "/products/" + product.id);
  }


  /**
   * @file ajout d'un nouveau produit
   * @param product
   * @returns
   */
  saveProduct(product: Product): Observable<Product> {
    let host = environment.host;
    return this.http.post<Product>(host + "/products", product);
  }




  /**
   * @file nous recuperons d'abord le produit à modifier getProduct()
   * @file modification d'un produit updateProduct()
   * @param product
   * @returns
   */
  getProduct(id: number): Observable<Product> {
    let host = environment.host;
    return this.http.get<Product>(host + "/products/" + id);
  }

  updateProduct(product: Product): Observable<Product> {
    let host = environment.host;
    return this.http.put<Product>(host + "/products/" + product.id, product);
  }
}
