const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var videoSchema = new Schema({
	url: String,
	date: String,
	region: String,
	type: String,
});

module.exports = mongoose.model("video", videoSchema);
