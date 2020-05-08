const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var fcmsongSchema = new Schema({
  songNo: String,
  artist: String,
  album: String,
  vol: String,
  audio: String,
  title: {
    English: { text: String },
    Tamil: { text: String },
  },
  lyrics: {
    English: { text: String },
    Tamil: { text: String },
  },
});
const fcmbook = mongoose.model("fcmsongs", fcmsongSchema);

module.exports = fcmbook;
