$( document ).ready(function() {
  $( "a" ).click(function( event ) {
    event.preventDefault();
    $( this ).hide( "slow" );
  });
  $("button").click(function() {
         //$("p").remove();
         $( "p" ).remove();
         $.ajax({
             url: "/fetch",
             type: "GET",
             data: {
               name: "Lab 7 Data returned"
             }
         })
         .done(function( result ) {
            $("body").append("<p> Data: " + result.content + "</p>");
         })

         .fail(function(xhr, status, errorThrown) {
             console.log('AJAX request failed...');
             $("body").append("<p> no data yet... </p>");
          })
     });
});
