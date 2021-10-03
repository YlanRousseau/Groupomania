module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
        Comment: {
            type: Sequelize.TEXT
        },
    });
    return Comments;
};