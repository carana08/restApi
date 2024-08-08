const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT)

// router.post('/items', verifyJWT, itemController.createItem);
// router.get('/items/:id', verifyJWT, itemController.getItem);
// router.get('/items', verifyJWT, itemController.getAllItems);
// router.put('/items/:id',verifyJWT, itemController.updateItem);
// router.delete('/items/:id',verifyJWT, itemController.deleteItem);

// module.exports = router;

router.post('/items', verifyJWT, itemController.createItem);
router.get('/items/:id', verifyJWT, itemController.getItem);
router.get('/items', verifyJWT, itemController.getAllItems);
router.put('/items/:id', verifyJWT, itemController.updateItem);
router.delete('/items/:id', verifyJWT, itemController.deleteItem);

module.exports = router;