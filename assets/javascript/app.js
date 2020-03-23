console.log("javascript loaded")
$(document).ready(function () {

    var topic = ""
    //  create actions/commands/buttons for the API to recognize and pull to the html(javascript)
    var actions = ["dog", "the office", "spongebob", "Bay Bridge", "frenchFries", "mangos", "blueberries", "familyGuy"];
    // display buttons for the gifs
    function displayGifButtons() {
        $("#gifButtonsView").empty();
        for (var i = 0; i < actions.length; i++) {
            var gifButtonsView = $("<button>");
            gifButtonsView.addClass("action");
            gifButtonsView.addClass("btn btn-primary");
            gifButtonsView.attr("data-name", actions[i])
            gifButtonsView.text(actions[i]);
            //  gifButtonsView = `<button class="action btn btn-primary" data-name=${actions[i]}>${actions[i]}</button>`
            $("#gifButtonsView").append(gifButtonsView);
        }
        $(".action").on("click", function () {
            topic = $(this).attr("data-name")
            console.log("topic:", topic)
            search(topic)
        })
    }

    function search(topic) {
        var API_KEY = "Bu90UJjNZMWaRTJU3K7PgAmZo7bQG7fb"
        var url = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + API_KEY + "&limit=10";

        $.ajax({
            url: url,
            method: "GET",
        }).then(function (res) {
            console.log(res.data)
            $("#giphy").empty();
            for (var i = 0; i < res.data.length; i++) {
                var gimageview = $("<img>");
                gimageview.addClass("gifimage");
                gimageview.attr("alturl", res.data[i].images.downsized_still.url)

                gimageview.attr("src", res.data[i].images.downsized.url)
                $("#gifButtonsView").append(gimageview);
            }
            $(".gifimage").on("click", function () {
                //topic = $(this).attr("data-name")
                console.log("this click:", this)
                console.log("image clicked:", this)

                // switch the images 
                var imageSRC = $(this).attr("src")
                var imageALT = $(this).attr("alturl")
                $(this).attr("alturl", imageSRC)
                $(this).attr("src", imageALT)

            })
        })
    }
    $("#addtopic").on("click", function () {
        event.preventDefault()
        topic = $("#keytopic").val()
        console.log("keytopic:", topic)
        // add this topic to the array
        actions.push(topic)
        displayGifButtons()
        search(topic)
    })

    // function addNewButton() {
    //     $("#addGif").on("click", function() {
    //         var action = $("#action-input").val().trim();
    //         if (action == "") {
    //             return false;}
    //         actions.push(action);

    //         displayGifButtons();
    //         return false;

    //     } );
    //      }
    //      .done(function(response) {
    //         console.log(response);
    //         $("#gifsView").empty();
    //         var results =response.data;
    //         if (results == """) {
    //             alert("There is not  a gif for the selected button");
    //      }

    //      for (var i = 0; i < results.length; i++) {
    //          var gifDiv = $("<div>");
    //          gifDiv.addClass("gifDiv");

    //          var gifRating = $("<p>").text("Rating: " + results[i].rating);
    //          gifDiv.append(gifRating);

    //          var gifImage = $("<img>");
    //          gifImage.a
    //      }



    //      )




    displayGifButtons()



})
//  form  asking for a topic

// by defualt some buttons with a theme 

// render more buttons 


// api call to giphy   / based on the key get from the buttons 

// rnder images from the api 
// then you need to be able to switch between w king of images gif / still




