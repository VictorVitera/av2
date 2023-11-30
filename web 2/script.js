function cadastrarVaga() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
  
    if (nome && email) {

        var novaVaga = {
            nome: nome,
            email: email,
          };

          salvarVaga(novaVaga);

          adicionarVagaNaLista(novaVaga);

 document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
  } else {
    alert("Preencha todos os campos do formulário.");
  }
}         

function adicionarVagaNaLista(vaga) {
    
    var listaVagas = document.getElementById("listaVagas");
    var novaVaga = document.createElement("li");
    novaVaga.innerHTML = `<strong>${vaga.nome}</strong>: ${vaga.email}`;
    listaVagas.appendChild(novaVaga);
  }

  function salvarVaga(vaga) {

    var vagasSalvas = JSON.parse(localStorage.getItem("vagas")) || [];


    vagasSalvas.push(vaga);


    localStorage.setItem("vagas", JSON.stringify(vagasSalvas));


}

function carregarVagasSalvas() {
        
    var vagasSalvas = JSON.parse(localStorage.getItem("vagas")) || [];
       
   

    for(i in vagasSalvas){
    adicionarVagaNaLista(vagasSalvas[i]);    

    }

}
window.onload = function () {     carregarVagasSalvas();   };