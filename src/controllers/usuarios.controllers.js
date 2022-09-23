import Usuario from "../models/usuario";
import bcrypt from 'bcryptjs';
import generarJWT from "../helpers/jwt";

export const login = async (req, res) =>{
    try {
        //verificar si existe un mail como el recibido
        const { email, password} = req.body

        //verificar si el email ya existe
        let usuario = await Usuario.findOne({email});//devuelve null si no encuentra
        if(!usuario){
            //si el usuario existe
            return res.status(400).json({
                mensaje: 'Correo o password invalido' //correo
            })
        }
        //confirmar si el password es valido
        const passwordValido = bcrypt.compareSync(password, usuario.password)
        console.log(passwordValido)
        if(!passwordValido){
            return res.status(400).json({
                mensaje: 'Correo o password invalido' //password
            })
        }
        //generar el token
        const token = await generarJWT(usuario._id, usuario.nombre)

        //responder que el usuario es correcto
        res.status(200).json({
            mensaje: 'El usuario existe',
            uid: usuario._id,
            nombre: usuario.nombre,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'El usuario no es valido'
        })
    }
}

export const crearUsuario = async(req, res) =>{
    try {
        const {nombre, email, password} = req.body

        //verificar si el email ya existe
        let usuario = await Usuario.findOne({email});//devuelve null si no encuentra
        if(usuario){
            //si el usuario existe
            return res.status(400).json({
                mensaje: 'ya existe un usuario con el correo enviado'
            })
        }
        
        //guardamos en nuevo usuario en la BD
        usuario = new Usuario(req.body)
        //encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)

        //generar el token
        const token = await generarJWT(usuario._id, usuario.nombre)
        
        await usuario.save();
        res.status(201).json({
            mensaje: 'usuario creado',
            nombre: usuario.nombre,
            uid: usuario._id,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'El usuario no pudo ser creado'
        })
    }
    
}