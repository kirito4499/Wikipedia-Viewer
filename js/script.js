var apiURL = "https://en.wikipedia.org/w/api.php?callback=?";

$(document).ready(() => {
    $('#search-btn').click(search);

    $('#search-text').keydown(event => {
        
        if (event.keyCode == 13) {
            search();
        }
    });
});

var search = () => {
    $("#result-div").empty();
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + $("#search-text").val() + "&prop=info&inprop=url&utf8=&format=json",
        dataType: "jsonp",
        success: data => {
            console.log(data);
            resArr = data.query.search;
            resArr.forEach(element => {
                $('#result-div').append(
                    "<div id='result' class='results'><h5><a href='#' target=''>" + element["title"] + "</a></h5><p = class='extract'>" + element["snippet"] + "</p></div>"
                );
            })
            $(".footer").hide();
        }
    });
}