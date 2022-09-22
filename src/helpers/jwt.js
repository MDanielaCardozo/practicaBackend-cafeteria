import jwt from "jsonwebtoken";

const generarJWT = (uid, nombre) => {
    return new Promise((resolve, reject) => {
       //agregar los datos al payload
       const payload = {uid, nombre};
       //aqui firmamos el token
       jwt.sign(payload, process.env.SECRET_JWT, { 
       expiresIn: '3h'
       }, (err, token)=>{
        if(err){
            console.log(err);
            reject('No se pudo generar el token')
        }
        //si es correcto
        resolve(token);
       })
    })
}

export default generarJWT;