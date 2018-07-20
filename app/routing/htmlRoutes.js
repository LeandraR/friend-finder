//display survey page

var path = require("path");

module.exports = function (app) {

    app.get("/home", function (req, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function (req, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });

};
