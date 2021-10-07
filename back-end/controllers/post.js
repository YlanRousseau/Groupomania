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

exports.findAll = (req, res) => {

};


exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};


exports.delete = (req, res) => {

};


exports.deleteAll = (req, res) => {

};


exports.findAllPublished = (req, res) => {

};