import db from '../db/conection';
import { DataTypes } from 'sequelize';

const Usuario = db.define('Usuario', {
    tipo : {
        type: DataTypes.STRING },
    constraseña : {
        type: DataTypes.STRING }, 
},{
    createdAt:false,
    updatedAt:false
}
);

export default Usuario;