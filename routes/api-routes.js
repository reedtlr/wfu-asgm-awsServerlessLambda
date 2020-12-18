const mongoose = require("mongoose");
const videoSchema = require("../models/video");

mongoose.Promise = global.Promise;
mongoose.connect(
	"mongodb+srv://dexteradmin:newpassword@dextercluster.ktzzs.mongodb.net/testdb"
);

module.exports = (app) => {
    
    app.get("/getvideos", (req, res) => {
        const Schema = mongoose.Schema;

        // ALREADY DECLARED ABOVE
        var videoSchema = new Schema(
            {
                user: String,
                description: String,
                location: String,
            },
            { collection: "video" }
        );

        var video = mongoose.model("video");

        video.find({}, function (err, data) {
            console.log(">>>>", data);
        });
    });

    app.post("/addname", (req, res) => {
        var myData = new videoSchema(req.body);
        myData
            .save()
            .then((item) => {
                res.send("item saved to database");
            })
            .catch((err) => {
                res.status(400).send("unable to save to database");
            });
    });

};
