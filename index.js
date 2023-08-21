const grade = document.getElementById("grade");
let jogoDeBloqueio = false;
//Defina o modo de teste como verdadeiro se quiser ver a localização das minas
const modoTeste = false;
gerarGame()

//Gerar Jogo 10 * 10 grade
function gerarGame(){
    jogoDeBloqueio = false;
    grade.innerHTML = "";
    for(var i = 0; i < 10; i++){
        row = grade.insertRow(i);
        for(var j =0; j < 10; j++){
            celula = row.insertCelula(j);
            celula.onclick = function () { Init(this); };
            var mina = document.createAttribute("mina");
            mina.value = false;
            celula.setAttributeNode(mina);
        }
    }
    gerarMinas();
}

//Gerar Minas Aleatóriamente
function gerarMinas(){
    //Adiciona 20 minas ao Jogo
    for(var i = 0; i < 20; i++ ){
        var linha = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var celula = grade.linhas[linha].celulas[col];
        celula.setAttribute("minas", "true");
        if(testMode){
            celula.innerHTML = "X";
        }
    }
}