import { Router } from 'express';
import  { getAccesorios, getAccesorio }  from '../controllers/accesorios';

const router = Router();

router.get('/', getAccesorios);
router.get('/:id', getAccesorio);

export default router;