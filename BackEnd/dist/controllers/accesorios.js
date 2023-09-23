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
exports.updateAccesorio = exports.postAccesorio = exports.deleteAccesorio = exports.getAccesorio = exports.getAccesorios = void 0;
const Accesorio_1 = __importDefault(require("../models/Accesorio"));
const getAccesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAccesorios = yield Accesorio_1.default.findAll();
    res.json(listAccesorios);
});
exports.getAccesorios = getAccesorios;
const getAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Accesorio = yield Accesorio_1.default.findByPk(id);
    if (Accesorio) {
        res.json(Accesorio);
    }
    else {
        res.status(404).json({ msg: 'No existe un Accesorio con el id ${id}'
        });
    }
});
exports.getAccesorio = getAccesorio;
const deleteAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Accesorio = yield Accesorio_1.default.findByPk(id);
    if (!Accesorio) {
        res.status(404).json({ msg: 'No existe un Accesorio con el id ${id}'
        });
    }
    else {
        yield Accesorio.destroy();
        res.json({ msg: 'El Accesorio fue eliminado con éxito'
        });
    }
});
exports.deleteAccesorio = deleteAccesorio;
const postAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Accesorio_1.default.create(body);
        res.json({
            msg: 'El Accesorio fue agregado con éxito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error al ingresar Accesorio'
        });
    }
});
exports.postAccesorio = postAccesorio;
const updateAccesorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const Accesorio = yield Accesorio_1.default.findByPk(id);
    try {
        if (Accesorio) {
            yield Accesorio.update(body);
            res.json({ msg: 'El Accesorio fue actualizado con éxito' });
        }
        else {
            res.json({ msg: 'No existe un Accesorio con el id $(id)' });
        }
    }
    catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' });
    }
});
exports.updateAccesorio = updateAccesorio;
