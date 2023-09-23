import { Router } from 'express';
import  { getUsuarios, getUsuario }  from '../controllers/usuarios';

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);

export default router;