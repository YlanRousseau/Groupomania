module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("Post", {
        userId: Sequelize.INTEGER,
        title: Sequelize.STRING,
        messageUrl: Sequelize.STRING,
        message: Sequelize.STRING
    });
    return Post;
};