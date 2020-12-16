const path = require("path");

module.exports = (app) => {
    
    app.get('/', (req, res) => {
        res.status(200).send('Hello World!');
    });

};