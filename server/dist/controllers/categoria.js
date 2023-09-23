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
exports.updateCategoria = exports.postCategoria = exports.deleteCategoria = exports.getCategoria = exports.getCategorias = void 0;
const Categoria_1 = __importDefault(require("../models/Categoria"));
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCategorias = yield Categoria_1.default.findAll();
    res.json(listCategorias);
});
exports.getCategorias = getCategorias;
const getCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Categoria = yield Categoria_1.default.findByPk(id);
    if (Categoria) {
        res.json(Categoria);
    }
    else {
        res.status(404).json({ msg: 'No existe un Categoria con el id ${id}'
        });
    }
});
exports.getCategoria = getCategoria;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Categoria = yield Categoria_1.default.findByPk(id);
    if (!Categoria) {
        res.status(404).json({ msg: 'No existe un Categoria con el id ${id}'
        });
    }
    else {
        yield Categoria.destroy();
        res.json({ msg: 'El Categoria fue eliminado con éxito'
        });
    }
});
exports.deleteCategoria = deleteCategoria;
const postCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Categoria_1.default.create(body);
        res.json({
            msg: 'El Categoria fue agregado con éxito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error al ingresar Categoria'
        });
    }
});
exports.postCategoria = postCategoria;
const updateCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const Categoria = yield Categoria_1.default.findByPk(id);
    try {
        if (Categoria) {
            yield Categoria.update(body);
            res.json({ msg: 'El Categoria fue actualizado con éxito' });
        }
        else {
            res.json({ msg: 'No existe un Categoria con el id $(id)' });
        }
    }
    catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' });
    }
});
exports.updateCategoria = updateCategoria;
