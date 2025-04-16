const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
//ON IMPORTE LE MODEULE BCRYPT QUI PERMET DE HACHER DES EXPRESSIONS
const bcrypt = require ('bcrypt');

const User = new Schema ({
    name: {
        type: String,
        trim: true,
        required: [true, 'Le nom est requis']
    },

    firstname: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        trim: true,
        required: [true, "l'e-mail est requis"],
        lowercase: true
    },

    password: {
        type: String,
        trim: true
    }
}, {
    //ON AJOUOTE 2 CHAMPS AU DOCUMENT CreatedAt ET updatedAt
    timestamps: true

});

//hash le mot de passe quand il est modifié
User.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next ();
    }

    this.password = bcrypt.hashSync(this.password, 10);

    next();
});

module.exports = mongoose.model('User', User);