import { check } from 'express-validator';
import resultadoValidacion from './resultadoValidacion';

const validarProducto = [
    check(
      "nombreProducto",
      "El nombre del producto es obligatorio"
    ).notEmpty(),
    check(
      "nombreProducto",
      "El producto debe tener entre 2 y 50 caracteres"
    ).isLength({ min: 2, max: 50 }),
    check("precio", "El precio es un valor obligatorio").notEmpty(),
    check("precio").custom((value) => {
      if (value >= 0 && value <= 9000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 0 y 9000");
      }
    }),
    (req, res, next) => {
        resultadoValidacion(req, res, next)
    }
  ];

  export default validarProducto;