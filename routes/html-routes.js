const path = require("path");

module.exports = (app) => {
    
    app.get('/', (req, res) => {
        // res.status(200).send('Hello World!');
        res.sendFile(path.join(__dirname, "../index.html"));
    });
    
};