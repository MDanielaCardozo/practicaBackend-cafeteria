import Producto from "../models/producto";

export const crearProducto = async(req, res)=>{
    try {
        console.log(req.body)
        //validacion 
        //crear un objeto para guardar en la base de datos
        const productoNuevo = new Producto({
            nombreProducto:req.body.nombreProducto,
            imagen: req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria
        });
        //guardar efectivamente en la base de datos
        await productoNuevo.save()
        //enviar respuesta al frontend
        res.status(201).json({
            mensaje:'El producto fue creado exitosamente'
        })

        //si algo falla tambien enviar una respuesta
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'El producto enviado no pudo ser creado'
        })
    }
}

export const listarProductos = async(req, res)=>{
    try {
        //buscar en la BD la coleccion de productos
        const listaProductos = await Producto.find();
        //enviar la reapuesta 
        res.status(200).json(listaProductos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar los productos'
        })
    }
}

export const obtenerProducto = async(req, res)=>{
    try {
        console.log(req.params.id);
        //buscar en la BD la coleccion de productos
        const productoBuscado = await Producto.findById(req.params.id);
        //enviar la reapuesta 
        res.status(200).json(productoBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar los productos'
        })
    }
}

export const editarProducto = (req, res)=>{
    res.send('editamos un producto')
}

export const borrarProducto = async(req, res)=>{
    try {
        //buscar un producto por el id en la collection de productos de la BD y luego borrar
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El producto fue eliminado correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje:'Error al intentar borrar por el producto'
        })
    }
}