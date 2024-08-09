const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT)

// router.post('/items', itemController.createItem);
// router.get('/items/:id', itemController.getItem);
// router.get('/items', itemController.getAllItems);
// router.put('/items/:id',verifyJWT, itemController.updateItem);
// router.delete('/items/:id',verifyJWT, itemController.deleteItem);

// module.exports = router;

router.post('/items', itemController.createItem);
router.get('/items/:id', itemController.getItem);
router.get('/items', itemController.getAllItems);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;