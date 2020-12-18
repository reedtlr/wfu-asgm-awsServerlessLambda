const mongoose = require("mongoose");
const videoSchema = require("../models/video");

module.exports = (app) => {
	mongoose.Promise = global.Promise;
	mongoose.connect(process.env.MONGOURI);

	app.get("/api/getvideos", (req, res) => {
		return videoSchema.find({}, function (err, data) {
			console.log(err, data);
			if (err) throw err;
			return res.json(data);
		});
	});

	app.post("/api/addname", (req, res) => {
		const { video, description, location } = req.body;
		var myData = new videoSchema({ video, description, location });
		myData.create(data, (err, res) => {
			if (err) {
				console.error(err);
				console.log(data);
				return res.status(400).send("unable to save to database");
			} else {
				res.json(`${req.body} saved to database`);
			}
		});

		// .
		// .then((item) => {
		// 	res.json(`${req.body} saved to database`);
		// })
		// .catch((err) => {
		// 	res.status(400).send("unable to save to database");
		// });
	});
};
