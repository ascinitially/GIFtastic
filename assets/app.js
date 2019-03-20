var animals = ["otter","cat","dog"]

var buttonInput;
var butt;





createButtons();

$(".button").on("click", function() {
    event.preventDefault();
    $(".gifs").empty();
    console.log($(this).attr("animal"));
    
    // var buttonValue = $(this).text
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
})




$("#select-animal").on("click", function(event) {
    event.preventDefault();
    var input = $("#animal-input").val().trim();
    
    
    var aniGif;
    var newButt = $("<button>");
    newButt.text(input);
    $(".gifs").empty();
    $(".buttons").append(newButt);
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + input ;
    
    for (i=0 ; i<10; i++) {    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            aniGif = $('<img>');
            aniGif.css("height:300px;width:300px;margin:auto;");
            console.log(response.data.image_url);
            aniGif.attr("src" , response.data.image_url);
            aniGif.attr("alt", "test");
            $(".gifs").append(aniGif);
        })
    }
    
    $("#remove").on("click", function() {
        $(".gifs").empty();
    })
    
})

function createButtons(){ 
    for (i=0 ; i<animals.length ; i++) {
        butt = $("<button>");
        butt.text(animals[i]);
        butt.attr("animal",animals[i]);
        butt.addClass("button");
        $(".buttons").append(butt);
        }
    }  

//   console.log(response);
//   console.log(response.data[0].url)
//   displayGif(response);


// });
//   for (var i = 0; i < results.length; i++) {
    //     var gifDiv = $("<div>");
    
    //     var rating = results[i].rating;
    
    //     var p = $("<p>").text("Rating: " + rating);
    
    //     var personImage = $("<img>");
    //     personImage.attr("src", results[i].images.fixed_height.url);

    //     gifDiv.prepend(p);
    //     gifDiv.prepend(personImage);

    //     $(".gifs").prepend(gifDiv);
    //   }
    // });
    //once ajax call complete...
