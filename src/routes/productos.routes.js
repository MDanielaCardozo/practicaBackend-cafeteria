import { Router } from "express";

const router = Router();

//crear todas las rutas de los productos
//dominio+ /apicafe + /
router
.route('/')
.get((req, res)=>{
     res.send('primera peticion get')
})

export default router;

// app.get('/', (req, res)=>{
    // res.send('primera peticion get')
//})
//app.get('/prueba', (req, res)=>{
  //  res.send('otra peticion get')
//})

//app.post('/')