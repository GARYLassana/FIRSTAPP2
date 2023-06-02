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
