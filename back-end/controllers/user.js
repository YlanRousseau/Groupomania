const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                password: hash,
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Un ou plusieurs champs sont vides !" })
    }
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        message: "connexion réussi",
                        userId: user.id,
                        userName: user.nom,
                        userFirstName: user.prenom,
                        isAdmin: user.isAdmin,
                        token: jwt.sign({ userId: user.id },
                            'RANDOM_TOKEN_SECRET', { expiresIn: '24h' }
                        ),
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllAccounts = (req, res, next) => {
    User.findAll()
        .then((users) => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneAccount = (req, res, next) => {
    User.findOne({ where: { id: req.params.id } })
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

exports.deleteAccount = (req, res, next) => {
    User.findOne({ where: { id: req.params.id } })
        .then((user) => {
            User.destroy({ where: { id: req.params.id } })
                .then(() => res.status(200).json({ message: 'Compte supprimé' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};