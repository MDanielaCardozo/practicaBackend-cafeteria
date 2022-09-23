import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validacionProducto";
import validarJWT from "../helpers/validar-jwt";


const router = Router();

//crear todas las rutas de los productos
//dominio+ /apicafe + /productos
router
  .route("/productos")
  .get(listarProductos)
  .post([validarJWT, validarProducto], crearProducto);

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(validarJWT, editarProducto)
  .delete(validarJWT, borrarProducto);

export default router;

// app.get('/', (req, res)=>{
// res.send('primera peticion get')
//})
//app.get('/prueba', (req, res)=>{
//  res.send('otra peticion get')
//})

//app.post('/')
