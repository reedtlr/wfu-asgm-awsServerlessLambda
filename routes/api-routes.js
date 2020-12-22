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

	app.get("/api/getvideos/:startdate/:enddate", (req, res) => {
		var startdate = req.params.startdate;
		var enddate = req.params.enddate;

		return videoSchema.find(
			{ date: { $gte: startdate, $lte: enddate } },
			(err, data) => {
				if (err) throw err;
				res.json(data);
			}
		);
	});

	app.post("/api/addvideo/:url/:date/:region/:type", (req, res) => {
		var url = req.params.url;
		var date = req.params.date;
		var region = req.params.region;
		var type = req.params.type;

		var myData = new videoSchema({ url, date, region, type });
		console.log(myData);
		myData
			.save()
			.then((myData) => {
				res.status(200).send("saved to database");
				res.json(`${myData} saved to database`);
			})
			.catch((err) => {
				res.status(400).send("unable to save to database");
			});
	});

	app.post("/api/addvideo/", (req, res) => {
		const { url, date, region, type } = req.body;
		var myData = new videoSchema({ url, date, region, type });

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
