const form = document.getElementById ('form-campos');


form.addEventListener("submit", function (e) {
  let numA = Number(document.getElementById("campoa"));
  let numB = Number (document.getElementById("campob"));


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
