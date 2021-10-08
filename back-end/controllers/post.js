const db = require('../models');
const Post = db.post;
const User = db.users;
const Comment = db.comments;
const Op = db.Sequelize.Op;

exports.createPost = (req, res, next) => {
    const post = new Post({
        userId: req.body.userId,
        title: req.body.title,
        message: req.body.message,
        messageUrl: req.body.messageUrl,
    })
    console.log(post)
    post.save()
        .then(() => res.status(201).json({ message: "Publication réussie" }))
        .catch(error => res.status(400).json({ error }))
};

exports.findAllPost = (req, res) => {

};


exports.findOnePost = (req, res) => {

};



exports.deletePost = (req, res) => {
    Post.findOne({ where: { id: req.params.id } })
        .then((post) => {
            Post.destroy({ where: { id: req.params.id } })
                .then(() => res.status(200).json({ message: 'Publication supprimé' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};



exports.deleteAll = (req, res) => {

};


exports.findAllPublished = (req, res) => {

};