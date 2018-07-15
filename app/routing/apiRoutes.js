var friendData = require("../data/friends");

module.exports = function (app) {

//is not file path!! can call anything (is just road name)
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

// 1) take user input
// 2) can access database
//do math/logic

//pass data from front end to back end
//only post method where you can access both front & back info

    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        //comparison logic between req.body and friendData

        //pass back closest match
        res.json("hello" + req.body.name);
    });

};
