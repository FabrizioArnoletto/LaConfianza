import db from '../db/conection';
import { DataTypes } from 'sequelize';

const Prenda = db.define('Prendas', {
    nombre : {
        type: DataTypes.STRING },
    talle : {
        type: DataTypes.STRING }, 
    color : {
        type: DataTypes.STRING },        
    precio : {
        type: DataTypes.DOUBLE },
    preciotarjeta : {
        type: DataTypes.DOUBLE },
    imagen : {
        type: DataTypes.STRING },
},{
    createdAt:false,
    updatedAt:false
}
);

export default Prenda;