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
            console.log('response', response);
            response.items.slice(0, 4).forEach(function (book){
                var title = book.volumeInfo.title;
                console.log(title);
                var imgSrc = book.volumeInfo.imageLinks.smallThumbnail;
                console.log(imgSrc);
                var html = `
                <div>
                    <h1>${title}</h1>
                    <img src='${imgSrc}' />
                </div>
                `
                $("#books").append(html);
            })
        }
    });
});
