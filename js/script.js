/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});


$("#sbutton").click(function(){
            $("#galore").hide();
            var bput =$("#binput").val();
$.ajax({
        url: `https://www.googleapis.com/books/v1/volumes?q=${bput}`,
        method: "GET",
        success: function(response){
            console.log(response);
            var imageSrc = response.items[1].volumeInfo.imageLinks.thumbnail;
              var imageHtml = "<img src='" + imageSrc + " />";
              $("#body2").append(imageHtml);
            console.log(imageSrc);


        }
    });
     });
     //response.items[0].volumeInfo.imageLinks.thumbnail