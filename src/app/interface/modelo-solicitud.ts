import { ModeloPedido } from './modelo-pedido';
export interface ModeloSolicitud {
  //Del pedido
  idPedido: number;
  nombre: string;
  fechaDeNacimiento: string;
  direccionDeEnvio: string;
  ciudad: string;
  //Arreglo de los productos del pedido
  pedidos: ModeloPedido[];
}
