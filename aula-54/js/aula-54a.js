$(function() {

    $("#bt-0").click(function(){
        location.reload();
    });

    $("#bt-1").click(function(){
        $.ajax({
            type: "GET",
            dataType: "text",
            url: 'dados/arquivo.txt',
            success: function(data) {
                $("#info").html(data);
            }
        });
    });

    $("#bt-2").click(function(){
        $.ajax({
            type: "GET",
            dataType: "html",
            url: 'dados/arquivo.html',
            success: function(data) {
                $("#info").html(data);
            }
        });
    });

    $("#bt-3").click(function(){
        $.ajax({
            type: "GET",
            dataType: "script",
            url: 'dados/arquivo.js',
            success: function(data) {
                $("#info").html("");
            }
        });
    });

    $("#bt-4").click(function(){
        $("#info").html("");
        $("#info").append("<h5>Livros:</h5>");
        $("#info").append("<ul></ul>");
        $.ajax({
            type: "GET",
            url: "dados/arquivo.xml",
            dataType: "xml",
            success: function (xml) {
                $(xml).find('Livro').each(function () {
                    var sTitulo = $(this).find('Titulo').text();
                    console.log(sTitulo);
                    var sAutor = $(this).find('Autor').text();
                    var sGenero = $(this).find('Genero').text();
                    $("<li></li>").html(sTitulo + ", " + sAutor + " | Gênero: " + sGenero).appendTo("#info ul");
                });
            }
        });
    });

    $("#bt-5").click(function(){
        $.ajax({
            type: "GET",
            dataType: "json",
            url: 'dados/arquivo.json',
            success: function(data) {
                $('#info').jsonViewer(data);
            }
        });
    });


    // $("#form1").submit(function(event){

    //     event.preventDefault();

    //     $.ajax({
    //         method: "GET",
    //         url: "cadastrar.php",
    //         data: { nome: "Pedro", email: "pedro@email.com" },
    //         success: function(resposta){
    //             alert("Cadastrado com sucesso!");
    //             $("#info").html("Cadastrado: " + resposta);
    //         },
    //         error: function(){
    //             alert("Falha ao cadastrar!");
    //         },

    //     });
    
    // });

    // return false;

});
  
  