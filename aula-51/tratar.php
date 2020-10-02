<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tratamento - buttonCaptcha</title>

    <!-- CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    
</head>
<body>

<div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">

    <div class="card mt-5">
        <div class="card-header">
            <h5 class="text-center text-success">Comentário cadastrado com sucesso!</h5>
        </div>
        <div class="card-body">

            <?php

            if(isset($_POST['nome'])){
                $nome = $_POST['nome'];
            }

            if(isset($_POST['comentario'])){
                $comentario = $_POST['comentario'];
            }

            echo "Nome: " . $nome . "<br />";
            echo "Comentário: " . $comentario;

            ?>

            <br /><br />

            <div class="text-right">
                <input type="button" class="brt btn-primary" value="Voltar" onClick="JavaScript: window.history.back();">
            </div>    


        </div>
        </div>
    </div>
    <div class="col-md-4"></div>
</div>

</body>
</html>