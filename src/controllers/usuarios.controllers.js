import Usuario from "../models/usuario";
import bcrypt from 'bcryptjs';

export const login = (req, res) =>{
    res.send('usuario logueado...')
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
        
       
        //generar el token

        //guardamos en nuevo usuario en la BD
        usuario = new Usuario(req.body)
        //encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt)
        
        await usuario.save();
        res.status(201).json({
            mensaje: 'usuario creado',
            nombre: usuario.nombre,
            uid: usuario._id
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'El usuario no pudo ser creado'
        })
    }
    
}