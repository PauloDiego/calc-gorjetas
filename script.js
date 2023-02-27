 function calcularGorjeta(event){
    event.preventDefault();

    let conta = document.getElementById('Conta').value;
    let qualidadeServ = document.getElementById('QualidadeServico').value;
    let Npessoas = document.getElementById('pessoas').value;

    if(conta == '' | qualidadeServ == 0 | Npessoas == ''){
        alert("Por favor, preencha os valores!");
        return;
    }

    if (Npessoas == "" | Npessoas <= 1) {
        Npessoas = 1;
        document.getElementById('cadaPessoa').style.display = "none"
    }else{
      document.getElementById('cadaPessoa').style.display = "block"
   }

    let total = (conta * qualidadeServ)/ Npessoas;
    total = total.toFixed(2);

    document.getElementById('gorjeta').innerHTML = total;
    document.getElementById('gorjetaTotal').style.display = "block";
 }

document.getElementById('gorjetaTotal').style.display="none";
document.getElementById('cadaPessoa').style.display="none";

document.getElementById('form').addEventListener('submit', calcularGorjeta);