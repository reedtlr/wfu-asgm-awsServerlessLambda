const mongoose = require("mongoose");
const videoSchema = require("../models/video");

module.exports = (app) => {
	mongoose.Promise = global.Promise;
	mongoose.connect(process.env.MONGOURI);

	app.get("/api/getvideos", (req, res) => {
		return videoSchema.find({}, function (err, data) {
			if (err) throw err;
			return res.json(data);
		});
	});

	app.post("/api/addvideo", (req, res) => {
		const { video, description, location } = req.body;
		var myData = new videoSchema({ video, description, location });

		myData
			.save()
			.then((myData) => {
				res.json(`${myData} saved to database`);
			})
			.catch((err) => {
				res.status(400).send("unable to save to database");
			});
	});
};
