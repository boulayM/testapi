const express = require('express');
const router = express.Router();

const service = require ('../services/users');
const private = require ('../middlewares/private');

router.get ('/:id', service.getById);
router.put ('/add', service.add);
router.patch ('/:id', private.checkJWT, service.update);
router.delete ('/:id', private.checkJWT, service.delete);


//AJOUT DE LA ROUTE AUTHENTICATE

router.post('/authenticate', service.authenticate);


module.exports = router;
