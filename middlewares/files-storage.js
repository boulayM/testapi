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
        const name = file.originalname.split(' ').join('_');
        console.log(name)
        const extension = MIME_TYPES[file.mimetype];
        //CI DESSOUS LE CALLBACK AJOUTE UN TIMESTAMP CONCATÉNÉ
        //AVEC LE NOM DE L'IMAGE COMME NOM D'IMAGE POUR LA SAUVEGARDE
        //CELA PERMET DE LA RENDRE UNIQUE

        callback(null, Date.now() + name);
    }
});

module.exports = multer({storage: storage});

/*
const upload = multer({ dest: './uploads/' })
app.post('/', upload.single('uploaded_file'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.file, req.body)
});

module.exports = multer ({upload: upload});*/