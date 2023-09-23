import { Router } from 'express';
import  { getPrendas, getPrenda, deletePrenda, postPrenda, updatePrenda }  from '../controllers/prendas';

const router = Router();

router.get('/', getPrendas);
router.get('/:id', getPrenda);
router.delete('/:id', deletePrenda);
router.post('/', postPrenda);
router.put('/:id', updatePrenda);

export default router;