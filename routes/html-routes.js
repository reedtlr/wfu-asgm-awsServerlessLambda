const path = require("path");

module.exports = (app) => {
    
    app.get('/', (req, res) => {
        // res.status(200).send('Hello World!');
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get('/members', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/members.html"));
    });

    app.get('/signin', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    app.get('/videoupload', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/videoupload.html"));
    });

};