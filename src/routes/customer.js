const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
router.get('/generate/:id',customerController.generate);
router.get('/generate2/:id',customerController.generate2);
router.get('/generate3/:id',customerController.generate3);
router.get('/generate4/:id',customerController.generate4);




module.exports = router;
