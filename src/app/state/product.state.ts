
export enum DataStateEnum {
  LOADING,// En chargement
  LOADED, // Chargé
  ERROR   // S'il y a erreur
}
// le point d'integogation c'est pour indiquer que l'objet n'est pas obligatoire
export interface AppDataState<T> {
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: string
}
export enum ProductActionsTypes {
  GET_ALL_PRODUCTS = "[Product] Get all produsts",
  GET_SELECTED_PRODUCTS = "[Product] Get delected produsts",
  GET_AVAILABLE_PRODUCTS = "[Product] Get availabled produsts",
  SEARCH_PRODUCTS = "[Product] Search produsts",
  NEW_PRODUCTS = "[Product] New produsts",
  SELECT_PRODUCTS = "[Product] Select produsts",
  EDIT_PRODUCTS = "[Product] Edit produsts",
  DELETE_PRODUCTS = "[Product] Delete produsts",
  PRODUCTS_ADDED = "[Product] produst added",
  PRODUCTS_UPDATE = "[Product] produst updated"
}
export interface ActionEvent {
  type: ProductActionsTypes,
  payload?: any
}
