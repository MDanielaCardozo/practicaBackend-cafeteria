import { Router } from "express";
import { crearProducto, listarProductos, obtenerProductos } from "../controllers/productos.controllers";

const router = Router();

//crear todas las rutas de los productos
//dominio+ /apicafe + /productos
router
.route('/productos')
.get(listarProductos)
.post(crearProducto);

router
.route('/productos/:id')
.get(obtenerProductos)
.put()
.delete();

export default router;

// app.get('/', (req, res)=>{
    // res.send('primera peticion get')
//})
//app.get('/prueba', (req, res)=>{
  //  res.send('otra peticion get')
//})

//app.post('/')