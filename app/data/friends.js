var friends = [{
    "name": "Ted Mosby",
    "photo": "../assets/ted-mosby.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Marshall Erikson",
    "photo": "../assets/marshall-eriksen.jpg",
    "scores": [
        4,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Lily Aldrin",
    "photo": "../assets/lily-aldrin.jpg",
    "scores": [
        1,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Robin Scherbatsky",
    "photo": "../assets/robin-scherbatsky.png",
    "scores": [
        2,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
},
{
    "name": "Barney Stinson",
    "photo": "../assets/barney-stinson.jpeg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}
];

module.exports = friends;

// compare each number with other's, calculate difference, add up
//no negative values - use absolute difference
// display smallest difference as match
// function compare() {
//     //loop through friends
//     for (var i = 0; i < friends.length - 1; i++) {
//         console.log(friends[i].name + " compared to " + friends[i + 1].name);
//         console.log("question " + [i + 1] + " result : " + (friends[i].scores[i] - friends[i + 1].scores[i]));

//         //loop through scores
//         for (var j = 0; j < friends[j + 1].scores.length; j++) {

//             console.log(friends[j].scores[j]);

//             var difference = Math.abs(friends[j].scores[j] - friends[j + 1].scores[j]);
//             console.log("Question " + [j + 1] + " " + difference);
//         };
//     };
// };

// compare();