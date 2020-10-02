$(function() {

  $("#bt-1").buttonCaptcha({
    codeWord: "orion",
    codeZone: false,
    captchaHeader: 'Você é um robot?',
    captchaTip: "Arraste as letras, da esquerda para a direita, para formar a palavra '%code_word%'. Obrigado!",
    captchaUnlocked: 'Desbloqueado!'
  });

});

