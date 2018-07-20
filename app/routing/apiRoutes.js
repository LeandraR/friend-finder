var friendData = require("../data/friends");
console.log(friendData[0].photo)
module.exports = function (app) {


    app.get("/api/friends", function (req, response) {
        response.json(friendData);
    });

    app.post("/api/friends", function (req, response) {
        var userInput = req.body;
        var userResponses = userInput.scores;
        var bestMatchArr = [];

        var matchName;
        var matchImage;
        //loops through friends
        for (var i=0; i<friendData.length; i++){
            //loops through existing API responses
            var reset = 0;
            for (var j = 0; j<userResponses.length; j++){
                //calculates difference between two responses
                var difference = Math.abs(friendData[i].scores[j] - userResponses[j]);
                //holds running total
                var total = reset+=difference;
            };
            console.log(`${friendData[i].name} compared to  ${userInput.name}: ${total}`);

            bestMatchArr.push(total);

        };

        var index;
        var newBFF;
        var newBFFPic;
        function indexOfSmallest(arr) {
            index=0;
            var value = arr[0];
            for (var t = 1; t < arr.length; t++) {
                if (arr[t] < value) {
                    value = arr[t];
                    index = t;
                }
            }
            newBFF = friendData[index].name;
            newBFFPic = friendData[index].photo;
        };
        console.log(newBFFPic);
        indexOfSmallest(bestMatchArr);
        response.json({'matchName': newBFF, 'photo': newBFFPic});
        friendData.push(userInput);
    });

};


