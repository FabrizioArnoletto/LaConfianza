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
exports.updatePrenda = exports.postPrenda = exports.deletePrenda = exports.getPrenda = exports.getPrendas = void 0;
const prenda_1 = __importDefault(require("../models/prenda"));
const getPrendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPrendas = yield prenda_1.default.findAll();
    res.json(listPrendas);
});
exports.getPrendas = getPrendas;
const getPrenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const prenda = yield prenda_1.default.findByPk(id);
    if (prenda) {
        res.json(prenda);
    }
    else {
        res.status(404).json({ msg: 'No existe la prenda con el id ${id}'
        });
    }
});
exports.getPrenda = getPrenda;
const deletePrenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const prenda = yield prenda_1.default.findByPk(id);
    if (!prenda) {
        res.status(404).json({ msg: 'No existe una prenda con el id ${id}'
        });
    }
    else {
        yield prenda.destroy();
        res.json({ msg: 'la prenda fue eliminada con éxito'
        });
    }
});
exports.deletePrenda = deletePrenda;
const postPrenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield prenda_1.default.create(body);
        res.json({
            msg: 'La Prenda fue agregada con éxito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error al ingresar la Prenda'
        });
    }
});
exports.postPrenda = postPrenda;
const updatePrenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const prenda = yield prenda_1.default.findByPk(id);
    try {
        if (prenda) {
            yield prenda.update(body);
            res.json({ msg: 'El producto fue actualizado con éxito' });
        }
        else {
            res.json({ msg: 'No existe la prenda con el id $(id)' });
        }
    }
    catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' });
    }
    prenda;
});
exports.updatePrenda = updatePrenda;
