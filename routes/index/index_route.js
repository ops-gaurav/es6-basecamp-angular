import express from 'express';
import indexController from '../../controllers/index/index_controller';

const router = express.Router();

router.get ('/', indexController.getIndex);

module.exports = router;