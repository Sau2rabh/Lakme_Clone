
// Json file for about.html for the history and about lakme salon

$(document).ready(function() {

       let title = "history";
       var test = "";

       $("a").click(function(){
           $("#about").html("");
            title = $(this).attr("title");
           $.getJSON("json_files/" + title +".json", function(data) {
               $.each(data, function() {
                   $.each(this, function(key, value) {
                       test =   "<h1>" + value.title  + "</h1>" +
                          
                           "<p>" + value.text + "</p>" + "<br>"
                       $("#about").append(test);
                   });
               });
           });

       })

    /*$("#toobin")[0].click();*/
    $("a[title='history']")[0].click();

}); // end ready
    