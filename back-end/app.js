const express = require('express');
const path = require('path');
const auth = require("./middleware/auth");
const helmet = require('helmet');
const cors = require("cors");
const app = express();

const db = require("./models");

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my new application." });
});

//Routes
app.use('/api/auth', userRoutes);
app.use("/api/post/new", postRoutes);



module.exports = app;