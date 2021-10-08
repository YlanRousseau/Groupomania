module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            unique: true,
            allowNull: false,
            type: Sequelize.STRING
        },
        nom: {
            allowNull: false,
            type: Sequelize.STRING
        },
        prenom: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING
        },
        isAdmin: {
            allowNull: false,
            defaultValue: false,
            type: Sequelize.BOOLEAN
        }
    });

    return Users;
};