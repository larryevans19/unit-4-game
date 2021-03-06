$(document).ready(function () {

    var magicNum = Math.floor(Math.random() * (121 - 19)) + 19;

    $("#magic-number").text(magicNum);

    var score = 0;

    var wins = 0;
    var losses = 0;

    var crystal17 = Math.floor(Math.random() * 12 + 1);
    var crystal28 = Math.floor(Math.random() * 12 + 1);
    var crystal52 = Math.floor(Math.random() * 12 + 1);
    var crystal90 = Math.floor(Math.random() * 12 + 1);

    console.log("1917:", crystal17);
    console.log("1928:", crystal28);
    console.log("1952:", crystal52);
    console.log("1990:", crystal90);

    var trophies = []

    trophies.push("assets/images/1917.png");
    trophies.push("assets/images/1928.png");
    trophies.push("assets/images/1952.png");
    trophies.push("assets/images/1990.png");

    console.log("trophies:", trophies);

    var scoreOptions = [crystal17, crystal28, crystal52, crystal90];

    for (var j = 0; j < scoreOptions.length; j++) {

        var imageTrophy = $("<img>");

        imageTrophy.addClass("trophy-image");

        imageTrophy.attr("src", trophies[j]);

        imageTrophy.attr("id", j);

        imageTrophy.attr("data-trophyvalue", scoreOptions[j]);

        $("#crystals").append(imageTrophy);

    }

    function newRound() {
        score = 0;
        $("#score").text(score);
        magicNum = Math.floor(Math.random() * (121 - 19)) + 19;
        $("#magic-number").text(magicNum);
        crystal17 = Math.floor(Math.random() * 12 + 1);
        crystal28 = Math.floor(Math.random() * 12 + 1);
        crystal52 = Math.floor(Math.random() * 12 + 1);
        crystal90 = Math.floor(Math.random() * 12 + 1);
        scoreOptions.splice(0, 4, crystal17, crystal28, crystal52, crystal90);
        $("#crystals").empty()
        for (var j = 0; j < scoreOptions.length; j++) {

            var imageTrophy = $("<img>");

            imageTrophy.addClass("trophy-image");

            imageTrophy.attr("src", trophies[j]);

            imageTrophy.attr("id", j);

            imageTrophy.attr("data-trophyvalue", scoreOptions[j]);

            $("#crystals").append(imageTrophy);

        }
        console.log("next 1917:", crystal17);
        console.log("next 1928:", crystal28);
        console.log("next 1952:", crystal52);
        console.log("next 1990:", crystal90);
        console.log("next magicNum:", magicNum);
        console.log("scoreOptions:", scoreOptions);
        game(crystal17, crystal28, crystal52, crystal90)
    }

    function game(crystal17, crystal28, crystal52, crystal90) {
        $(".trophy-image").on("click", function () {

            $("#0").mousedown(function () {
                $("#0").css("border-bottom", "5px solid white");
            });
            $("#0").mouseup(function () {
                $("#0").css("border-bottom", "10px solid white");
            });
            $("#1").mousedown(function () {
                $("#1").css("border-bottom", "5px solid white");
            });
            $("#1").mouseup(function () {
                $("#1").css("border-bottom", "10px solid white");
            });
            $("#2").mousedown(function () {
                $("#2").css("border-bottom", "5px solid white");
            });
            $("#2").mouseup(function () {
                $("#2").css("border-bottom", "10px solid white");
            });
            $("#3").mousedown(function () {
                $("#3").css("border-bottom", "5px solid white");
            });
            $("#3").mouseup(function () {
                $("#3").css("border-bottom", "10px solid white");
            });

            for (var j = 0; j < scoreOptions.length; j++) {

                imageTrophy.attr("data-trophyvalue", scoreOptions[j]);
                console.log("Current:", scoreOptions);
                console.log()
                var trophyValue = ($(this).attr("data-trophyvalue"));
                trophyValue = parseInt(trophyValue);
            }
            // for (var j = 0; j < scoreOptions.length; j++) {
            //     imageTrophy.attr("data-trophyvalue", scoreOptions[j]);
            //     console.log("Current:", scoreOptions);
            //     console.log()
            // }

            score += trophyValue;

            $("#score").text(score);

            console.log("magicNum:", magicNum);

            if (score !== 0 && score < magicNum) {
                $("#message").text("Pick a trophy!")
            }

            else if (score === magicNum) {
                console.log("score", score)
                $("#message").text("You win!");
                wins++;
                $("#wins").text(wins);
                newRound();
            }

            else if (score >= magicNum) {
                $("#message").text("You lose!");
                losses++;
                $("#losses").text(losses);
                newRound()
            }
        });

    };

    game(crystal17, crystal28, crystal52, crystal90);
});