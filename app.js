const express = require('express');
const mongoose = require ('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { initClientDbConnection } = require ('./db/mongo')


/*const cors = require ('cors');*/

const indexRouter = require('./routes/index');
const filesRouter = require('./routes/files');
/*
const mongodb = require ('./db/mongo');

mongodb.initClientDbConnection();
*/


const app = express();


initClientDbConnection()
.then(()=>{
    console.log('Connexion Mongo DB effectuée avec succés!')
})
.catch((err)=>{
    console.error('Erreu de connexion Mongo DB:', err);
    process.exit(1);
});

/*app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static (path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/files', filesRouter);


app.use(function(req, res, next) {
    res.status (404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erreur serveur !');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get ('/', (req, res) => {
    res.render('index');
});


module.exports = app;
