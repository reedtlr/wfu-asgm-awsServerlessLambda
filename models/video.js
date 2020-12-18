const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var videoSchema = new Schema({
	video: String,
	description: String,
	location: String,
});

module.exports = mongoose.model("video", videoSchema);
