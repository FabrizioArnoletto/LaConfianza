import {Request, Response} from 'express';
import Accesorio from '../models/accesorios';

export const getAccesorios = async (req:Request, res:Response)=> {
    const listAccesorios = await Accesorio.findAll()
    res.json(listAccesorios)
}

export const getAccesorio = async (req:Request, res:Response)=> {
    const {id} = req.params;
    const accesorio = await Accesorio.findByPk(id);
    if (Accesorio) {
        res.json(Accesorio);
    } else {
        res.status(404).json({msg : 'No existe la Accesorio con el id ${id}'
            })
    }
}
