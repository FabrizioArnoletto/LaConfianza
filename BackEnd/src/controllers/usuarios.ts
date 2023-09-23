import {Request, Response} from 'express';
import Usuario from '../models/usuarios';

export const getUsuarios = async (req:Request, res:Response)=> {
    const listUsuarios = await Usuario.findAll()
    res.json(listUsuarios)
}

export const getUsuario = async (req:Request, res:Response)=> {
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);
    if (Usuario) {
        res.json(Usuario);
    } else {
        res.status(404).json({msg : 'No existe la Usuario con el id ${id}'
            })
    }
}
