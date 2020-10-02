$(function() {

  $('#password').passtrength({
    minChars: 6,
    passwordToggle: true,
    eyeImg: "jquery-password_strength/img/eye.svg",
    tooltip: true,
    textWeak: "Senha fraca",
    textMedium: "Senha média",
    textStrong: "Senha forte",
    textVeryStrong: "Senha muito forte",
	});
  
});

