import {Request, Response} from 'express';
import Categorias from '../models/categoria';

export const getCategorias = async (req:Request, res:Response)=> {
    const listCategoria = await Categorias.findAll()
    res.json(listCategoria)
}

export const getCategoria = async (req:Request, res:Response)=> {
    const {id} = req.params;
    const categoria = await Categorias.findByPk(id);
    if (categoria) {
        res.json(categoria);
    } else {
        res.status(404).json({msg : 'No existe la categoria con el id ${id}'
            })
    }
}
