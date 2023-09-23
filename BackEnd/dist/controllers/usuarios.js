"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuario = exports.postUsuario = exports.deleteUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsuarios = yield Usuario_1.default.findAll();
    res.json(listUsuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Usuario = yield Usuario_1.default.findByPk(id);
    if (Usuario) {
        res.json(Usuario);
    }
    else {
        res.status(404).json({ msg: 'No existe un Usuario con el id ${id}'
        });
    }
});
exports.getUsuario = getUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Usuario = yield Usuario_1.default.findByPk(id);
    if (!Usuario) {
        res.status(404).json({ msg: 'No existe un Usuario con el id ${id}'
        });
    }
    else {
        yield Usuario.destroy();
        res.json({ msg: 'El Usuario fue eliminado con éxito'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Usuario_1.default.create(body);
        res.json({
            msg: 'El Usuario fue agregado con éxito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error al ingresar Usuario'
        });
    }
});
exports.postUsuario = postUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const Usuario = yield Usuario_1.default.findByPk(id);
    try {
        if (Usuario) {
            yield Usuario.update(body);
            res.json({ msg: 'El Usuario fue actualizado con éxito' });
        }
        else {
            res.json({ msg: 'No existe un Usuario con el id $(id)' });
        }
    }
    catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' });
    }
});
exports.updateUsuario = updateUsuario;
