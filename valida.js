function pegarDados() {
  document.querySelector(".esconder").style.display = "block";

  let camText = document.getElementById("texto").value;
  document.getElementById("camText").innerHTML = "Texto: " + camText;

  let camFone = document.getElementById("fone").value;
  document.getElementById("camFone").innerHTML = "Telefone: " + camFone;

  let camEmail = document.getElementById("email").value;
  document.getElementById("camEmail").innerHTML = "E-mail: " + camEmail;

  let camSenha = document.getElementById("senha").value;
  document.getElementById("camSenha").innerHTML = "Senha: " + camSenha;


  let camCheckInfo = document.getElementById("1info");

  let camCheckAdm = document.getElementById("1adm");
  
  let camCheckEnf = document.getElementById("1enf");
  
  if (camCheckInfo.checked) {
    document.getElementById("camCheckInfo").innerHTML = "Curso selecionado: Informática";
  }

  if (camCheckAdm.checked) {
    document.getElementById("camCheckAdm").innerHTML = "Curso selecionado: Administração";
  }

  if (camCheckEnf.checked) {
    document.getElementById("camCheckEnf").innerHTML = "Curso selecionado: Enfermagem";
  }

  if (document.getElementById("2info").checked) {
    document.getElementById("camCheckCur").innerHTML = "Curso selecionado 2: Informática";
  } else if (document.getElementById("2adm").checked) {
    document.getElementById("camCheckCur").innerHTML = "Curso selecionado 2: Administração";
  } else if (document.getElementById("2enf").checked) {
    document.getElementById("camCheckCur").innerHTML = "Curso selecionado 2: Enfermagem";
  }

  let camOcult = document.getElementById("oculto").value;
  document.getElementById("camOcult").innerHTML = "Valor Oculto: " + camOcult;

  let camNum = document.getElementById("nume").value;
  document.getElementById("camNum").innerHTML = "Número: " + camNum;

  let camData = document.getElementById("data").value;
  document.getElementById("camData").innerHTML = "Data: " + camData;

  let camHora = document.getElementById("hora").value;
  document.getElementById("camHora").innerHTML = "Hora: " + camHora;

  let camRange = document.getElementById("range").value;
  document.getElementById("camRange").innerHTML = "Barrinha: " + camRange;

  let camSel = document.getElementById("Faixa").value;
  document.getElementById("camSel").innerHTML = "Valor da Faixa: " + camSel;
}