var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController')

router.get('/', personController.getAllPerson);
router.get('/:id', personController.findById);
router.put('/:id', personController.update);
router.post('/', personController.createNewPerson);

module.exports = router;
