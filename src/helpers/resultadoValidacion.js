import { validationResult } from "express-validator";
 
const resultadoValidacion = (req, res, next) => {
    const errors = validationResult(req)
    //pregunta si tengo errores
        if(!errors.isEmpty()){
            return res.status(400).json(
                {
                    errors: errors.array() //devuelve la lista de errores
                    //errors: errors.mapped() //devuelve el primer error
                }
         )
        }
        //metodo, le digo que continue con el flujo
        next();
}

export default resultadoValidacion;