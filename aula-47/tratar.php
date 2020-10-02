<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tratamento - validation</title>

    <!-- CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    
</head>
<body>

<div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">

    <div class="card mt-5">
        <div class="card-header">
            <h5 class="text-center text-success">Cadastro realizado com sucesso!</h5>
        </div>
        <div class="card-body">

            <?php

            if(isset($_POST['data'])){
                $data = $_POST['data'];
            }

            if(isset($_POST['telefone'])){
                $telefone = $_POST['telefone'];
            }

            echo "Data: " . $data . "<br />";
            echo "Telefone: " . $telefone;

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