const form = document.getElementById ('form-campos');


form.preventDefault("submit", function (e) {
  let numA = campoa (document.getElementById("campoa"));
  let numB = campob (document.getElementById("campob"));


  
e.preventDefault();
	  numA.value = "";
	  numB.value = "";
	});

  botao.addEventListener("click", function (e) {
	  if (numB.value > numA.value) {
	     alert("Campo válido");
	  } else {
	     alert("Campo inválido");
	  }
	});
