const express = require('express');
const router = express.Router();

const userRoute = require ('../routes/users');

/* GET home page. */
router.get('/', async (req, res) => {
 /* res.status (200).json({
    name: process.env.APP_NAME,
    version: '1.0',
    status: 200,
    message: 'Bienvenue sur l\'API !'
  });*/

  res.render('index', {
    title: 'Accueil'
  })
});

router.use ('/users', userRoute);

module.exports = router;
