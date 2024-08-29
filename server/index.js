const express = require("express");
const app = express();

const db = require("./models");

db.sequelize.sync().then(() => {
        console.log('Database connection established.');
        app.listen(3001, () => {
            console.log('Server Running on Port 3001');
        });
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
