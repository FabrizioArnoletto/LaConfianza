import {Request, Response} from 'express';
import Prenda from '../models/prenda';

export const getPrendas = async (req:Request, res:Response)=> {
    const listPrendas = await Prenda.findAll()
    res.json(listPrendas)
}

export const getPrenda = async (req:Request, res:Response)=> {
    const {id} = req.params;
    const prenda = await Prenda.findByPk(id);
    if (prenda) {
        res.json(prenda);
    } else {
        res.status(404).json({msg : 'No existe la prenda con el id ${id}'
            })
    }
}

export const deletePrenda    = async (req:Request, res:Response)=> {
    const {id} = req.params
    const prenda = await Prenda.findByPk(id);
    if (!prenda) {
        res.status(404).json({msg : 'No existe una prenda con el id ${id}'
        })
    } else {
        await prenda.destroy();
        res.json({msg: 'la prenda fue eliminada con éxito'
        })
    }
    
}
export const postPrenda = async (req:Request, res:Response)=> {
    const {body} = req;
    try {
        await Prenda.create(body);    
        res.json({
            msg: 'La Prenda fue agregada con éxito'
        })
        
    } catch (error) {
        res.json({
            msg: 'Error al ingresar la Prenda'
        })   
    } 
}

export const updatePrenda = async (req:Request, res:Response)=> {
    const {body} = req;
    const {id} = req.params
    const prenda = await Prenda.findByPk(id);
    try {
        if (prenda){
            await prenda.update(body);
            res.json({msg: 'El producto fue actualizado con éxito'})
        }else {
            res.json({ msg: 'No existe la prenda con el id $(id)'})
        }
            
    } catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' })
    }prenda
}
