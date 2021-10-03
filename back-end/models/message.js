module.exports = (sequelize, Sequelize) => {
    const Messages = sequelize.define("messages", {
        message: {
            type: Sequelize.TEXT
        },
        messageUrl: {
            type: Sequelize.STRING
        }
    });
    return Messages;
};