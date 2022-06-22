import express from 'express';
const router = express.Router();
import controllers from './controllers';

router.get('/', controllers.getAllNotes);

export default router;
