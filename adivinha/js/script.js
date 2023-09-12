const jogoAdivinha = {
  semente: 50,
  tentativa: 0,
  numeroSorteado: function geraValorAleatorio() {
    return Math.round(Math.random() * this.semente);
  },
};

const btnVerifica = document.getElementById("btnVerifica");
const status = document.getElementById("status");
const tentativa = document.getElementById("tentativa");
const chute = document.getElementById("chute");
const nome = document.getElementById("nome")

let numeroSorteado = jogoAdivinha.numeroSorteado();

function atualizarTentativa(tentativa, valor) {
  if (valor <= 5) {
    tentativa.innerHTML =
      'Tentativas : <span style="color: white">' + valor + "</span>";
  }
}


function reiniciar() {
  btnVerifica.innerText = "Verificar";
  tentativa.innerHTML = "Tentativa :  0";
  chute.disabled = false;
  chute.value = "";
  jogoAdivinha.tentativa = 0;
  numeroSorteado = jogoAdivinha.numeroSorteado();
  btnVerifica.removeEventListener("click", reiniciar);
  status.innerHTML =
  '<span style="color:white">Adivinhe o número secreto</span>';
}

const formAdivinha = document.getElementById("form");



formAdivinha.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!!chute.value == false) {
    status.innerHTML = '<span style="color:#FF3D00">Digite algum valor</span>';
    return;
  }

  atualizarTentativa(tentativa, ++jogoAdivinha.tentativa);

  if (numeroSorteado == chute.value) {
    status.innerHTML =
      '<span style="color: green">É... ' + nome.value + ' você venceu </span>';
    chute.disabled = true;
    btnVerifica.innerText = "Tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);

  } else if (numeroSorteado > chute.value) {
    console.log(numeroSorteado)
    status.innerText = "O número sorteado é maior";
  } else if (numeroSorteado < chute.value) {
    console.log(numeroSorteado)
    status.innerText = "O número sorteado é menor";

  } 
  if(jogoAdivinha.tentativa >5){
    status.innerHTML =
    '<span style="color: red"> ' + nome.value + ' é um(a) loser</span>';
  chute.disabled = true;
  btnVerifica.innerText = "Tentar novamente?";
  btnVerifica.addEventListener("click", reiniciar);
  }
});
