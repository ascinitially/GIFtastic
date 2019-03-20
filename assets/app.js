var animals = ["otter","cat","dog"]

var buttonInput;
var butt;





createButtons();

$(document.body).on("click", ".button", function() {
    event.preventDefault();
    $(".gifs").empty();
    console.log($(this).attr("animal"));
    
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + $(this).attr("animal")  ;
    
    for (i=0 ; i<10; i++) { 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var aniGif = $('<img>');
            aniGif.css("height:300px;width:300px;margin:auto;");
            console.log(response.data.images.original_still.url);
            aniGif.attr("src" , response.data.images.original_still.url);
            aniGif.attr("alt", "test");
            aniGif.attr("stillURL", response.data.images.original_still.url);
            aniGif.attr("animatedURL",response.data.image_url);
            aniGif.attr("data-state", "still");
            $(".gifs").append(aniGif);
        })
    }
    $(".buttons").empty();
    createButtons();
})

$(document.body).on("click", "img", function() {
    if ($(this).attr("data-state") === "still") {
        $(this).attr("src", $(this).attr("animatedURL"));
        $(this).attr("data-state", "animated")
    } else {
        $(this).attr("src", $(this).attr("stillURL"));
        $(this).attr("data-state", "still");
    }
})




$("#select-animal").on("click", function(event) {
    event.preventDefault();
    var input = $("#animal-input").val().trim();
    animals.push(input);
    $(".buttons").empty();
    createButtons();
    $("#animal-input").val("");
    console.log(animals);
})



function createButtons(){ 
    $(".buttons").empty();
    for (i=0 ; i<animals.length ; i++) {
        butt = $("<button>");
        butt.text(animals[i]);
        butt.attr("animal",animals[i]);
        butt.addClass("button");
        butt.css("margin","5px");
        $(".buttons").append(butt);
        }
    }  