//----salvar e resgatar dados do localstorage

function carregarCandidatos() {
    const dados= localStorage.getItem("candidatos");
    return dados ? JSON.parse(dados) : []
}

function salvarCandidatos(candidatos){
    localStorage.setItem("candidatos", JSON.stringify (candidatos))

}

function salvarVotos(votos){
    localStorage.setItem("votos",JSON.stringify(votos))

}

//----navegacao ente paginas

const aba = document.querySelector(".aba")
const telas = document.querySelector(".tela")

abas.forEach(function(aba) {
    aba.addEventListener("click", function () {
        aba.forEach(a => a.classList.remove("ativa"));
        telas.forEach(t => t.classList.remove("ativa"));
        
        aba.classList.add("ativa")
        document.getElementById(aba.dataset.tela).classList.add("ativa")

        if(aba.dataset.tela == "candidatos") mostrarCandidato();
        if(aba.dataset.tela == "resultado") mostrarResultado();
        
    });

});
