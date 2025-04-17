const express = require ('express');
const router = express.Router();
const service = require ('../services/files');
const multer = require ('../middlewares/files-storage');
const private = require ('../middlewares/private');

router.get('/', private.chckeJWT, service.getAllFiles);
router.post('/', multer, createOneFile);
router.get('/:id', private.chckeJWT, service.getOneFile);
router.put('/:id', private.chckeJWT, multer, service.modifyOneFile);
router.delete('/delete', private.chckeJWT, service.deleteOneFile);

module.exports = router;