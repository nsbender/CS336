$( document ).ready(function() {
  $( "a" ).click(function( event ) {
      event.preventDefault();
      $( this ).hide( "slow" );
  });
  $("body").append( " <h1>jQuery & jQuery-UI</h1> ");
  $("body").append( " <button class='ui-button ui-widget ui-corner-all'>Get Data</button> ");

  $( "p" ).click(function( event ) {
    $( "p" ).removeClass( "modifiedp" );
  });
  $( "a" ).addClass( "test" );
  $( "p" ).addClass( "modifiedp" );
});
