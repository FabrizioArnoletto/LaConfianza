"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = __importDefault(require("../db/conection"));
const sequelize_1 = require("sequelize");
const Prenda = conection_1.default.define('Prendas', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    talle: {
        type: sequelize_1.DataTypes.STRING
    },
    color: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    preciotarjeta: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Prenda;
