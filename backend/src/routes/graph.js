import graphController from '../controllers/graph.js';
import { Router } from 'express';

const router = Router();

router.get('/edges', graphController.getEdges);
router.put('/edges', graphController.updateEdges);

router.get('/nodes', graphController.getNodes);
router.put('/nodes', graphController.updateNodes);
router.get('/nodes/next-id', graphController.getNextID)

export default router