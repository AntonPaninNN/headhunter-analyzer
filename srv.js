var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.static(__dirname + '/'));

var server = app.listen(3000, function() {
    console.log("Server started...");
});