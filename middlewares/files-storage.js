const multer = require ('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {

        //RECUPERER L'EXTENTION DU FICHIER A PARTIR DU MIME_TYPE

        const extension = MIME_TYPES[file.mimetype];

        //RECUPERER LA DATE DU JOUR

        const date = new Date();

        const day = date.getDay();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();


        //GENERER LO NOM DU FICHIER AVEC L'EXTENSION

        const name = file.originalname.toLowerCase().split(' ').join('_');
        let formattedDate;

        //OPERATEUR TERNAIRE UTILISE POUR INITALISER formattedDate

        month < 10 ? formattedDate = `${day}-0${month}-${year}` : formattedDate = `${day}-${month}-${year}`
        callback(null, formattedDate + '_' + name);
        
    }
});

module.exports = { storage };

