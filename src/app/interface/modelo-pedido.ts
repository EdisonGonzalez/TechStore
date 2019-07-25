import { ModeloProductos } from './modelo-productos';
export interface ModeloPedido {
  //Del producto
  producto: ModeloProductos;
  //Agregados
  cantidad: number;
  color: string;
}
