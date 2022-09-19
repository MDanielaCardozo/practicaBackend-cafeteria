import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validacionProducto";


const router = Router();

//crear todas las rutas de los productos
//dominio+ /apicafe + /productos
router
  .route("/productos")
  .get(listarProductos)
  .post(validarProducto, crearProducto);

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);

export default router;

// app.get('/', (req, res)=>{
// res.send('primera peticion get')
//})
//app.get('/prueba', (req, res)=>{
//  res.send('otra peticion get')
//})

//app.post('/')
