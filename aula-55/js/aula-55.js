$(function() {

  QUnit.test( "Teste Básico", function( assert ) {
    assert.ok( true, "Teste assert.ok() com true bem sucedido!" );
    var num1 = "1";
    assert.equal( num1, 1, "A variável num1 = '1' e o número 1 possuem o mesmo valor" );
    var num2 = 1;
    assert.strictEqual( num2, 1, "A variável num2 = 1 e o número 1 possuem o mesmo valor e tipo" );
  });

  QUnit.module( "Módulo Inputs" );

  QUnit.test( "Ok", function( assert ) {
    assert.ok( true, "Teste assert.ok() bem sucedido!" );
  });

  QUnit.test( "Focus", function( assert ) {
    var done = assert.async();
    var input = $("#email").focus();
    setTimeout(function() {
      assert.equal( document.activeElement, input[0], "Teste de Foco no campo de texto 'email' bem suceddido!" );
      done();
    });
  });
    
  
});

