import mongoose, { Schema } from "mongoose";

// "nombreProducto": "Té",
//   "precio": "200",
//   "imagen": "https://images.pexels.com/photos/5946748/pexels-photo-5946748.jpeg?cs=srgb&dl=pexels-charlotte-may-5946748.jpg&fm=jpg",
//   "categoria": "bebida-caliente",
const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 50,
        unique:true
    },
    imagen: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true,
        min: 0,
        max: 9000
    },
    categoria: {
        type: String,
        require: true,
        maxlength: 40
    }
});

const Producto = mongoose.model('producto', productoSchema)

export default Producto;
