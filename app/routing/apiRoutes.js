var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    var differenceArray = [];
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var compatableFriend = compatability(newFriend);

        friends.push(newFriend);

        res.json(compatableFriend);
    });
};


var differenceArray = [];
function compatability(friend) {
    var newScores = friend.scores;
    console.log("New Scores: " + newScores);

    for (var i = 0; i < friends.length; i++) {
        differenceArray = [];
        var currentFriendScores = friends[i].scores;
        console.log(friends[i].name + ": " + currentFriendScores);

        for (var j = 0; j < newScores.length; j++) {

            var newScore = parseInt(newScores[j]);
            var difference = Math.abs(newScore - currentFriendScores[j]);

            differenceArray.push(difference);
        };

        calculateDifference(differenceArray);
    };
    console.log("Total Difference Array: " + totalDifferenceArray);
    console.log("Least difference: " + Math.min(...totalDifferenceArray));
    console.log("Index of least difference: " + totalDifferenceArray.indexOf(Math.min(...totalDifferenceArray)))
    var compatableFriend = friends[totalDifferenceArray.indexOf(Math.min(...totalDifferenceArray))];
    console.log("Compatability match: " + compatableFriend.name);
    return compatableFriend;
};

var totalDifferenceArray = [];

function calculateDifference(array) {
    var totalDifference = 0;

    for (var i = 0; i < array.length; i++) {
        totalDifference += array[i];
    };

    totalDifferenceArray.push(totalDifference);

    console.log("Total Difference: " + totalDifference);
};