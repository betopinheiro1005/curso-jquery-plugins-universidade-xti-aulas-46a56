$( function() {
  
  $("#bt-0").click(function(){
    location.reload();
  });

  $( "#data" ).mask("99/99/9999");
  $( "#telefone" ).mask("(99) 99999-9999");

});
