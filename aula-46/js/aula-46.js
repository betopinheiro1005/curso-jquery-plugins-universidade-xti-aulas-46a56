$( function() {
  
  $("#bt-0").click(function(){
    $("#formulario").removeAttr("class","cmxform");
    location.reload();
  });


  $("#form1").validate({
    messages: {
      nome: {
        required: "O preenchimento deste campo é obrigatório!"
      },
      email: {
        required: "O preenchimento deste campo é obrigatório!",
        email: "Email inválido!"
      },
      submitHandler: (form) => {
        form.submit();
      }
    }  
  });

});


