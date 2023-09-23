import db from '../db/conection';
import { DataTypes } from 'sequelize';

const Categorias = db.define('Categorias', {
    categoria : {
        type: DataTypes.STRING },

},{
    createdAt:false,
    updatedAt:false
}
);

export default Categorias;