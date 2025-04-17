const express = require('express');
const router = express.Router();

const service = require ('../services/users');
const private = require ('../middlewares/private');

router.get ('/:id', private.chckeJWT, service.getById);
router.put ('/add', service.add);
router.patch ('/:id', private.chckeJWT, service.update);
router.delete ('/:id', private.chckeJWT, service.delete);

//AJOUT DE LA ROUTE AUTHENTICATE

router.post('/authenticate', service.authenticate);


module.exports = router;
