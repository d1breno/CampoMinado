const grade = document.getElementById("grade");
let jogoDeBloqueio = false;
//Defina o modo de teste como verdadeiro se quiser ver a localização das minas
const modoTeste = true;
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
            mina.value = "false";
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

//destaque todas as minas em vermelho
function minasDeRevelação(){
    for(var i = 0; i < 10; i++){
        for (var j = 0; j < 10; j++){
            var celula = grid.rows[1].celulas[j];
            if(celula.getAttribute("mina") == "true"){
                celula.className = "mina";
            }
        }
    }
}

function checkJogoCompleto(){
    var jogoCompleto = true;
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; i++){
            if((grade.linhas[i].celulas[j].getAttribute("mina") == "false") && (grade.linhas[i].celulas [j].innerHTML == "")) {
                jogoCompleto = false;
            }
        }
    }
}

if(jogoCompleto){
    alert("Você encontrou uma Mina!");
    revelarMinas
}

function init(celula){
    //verifique o jogo completo ou não
    if(jogoDeBloqueio){
        return;
    }else{
        //verifique o clique do usuário na mina
        if(celula.getAttribute("mina") == "true"){
            revelarMinas();
            jogoDeBloqueio = true;
        } else {
            celula.className = "active";
            //Exibir o número de minas ao redor da celula
            var contagemDeMinas = 0;
            var linhasDeCelula = celula.parentNode.rowIndex;
            var colunaCelular = celula.cellIndex;
            for(var i = Math.max(linhasDeCelula - 1, 0); i <= Math.min(linhasDeCelula + 1, 9); ij++){
                for (var j = Math.max(colunaCelular - 1, 0); j <= Math.min(colunaCelular + 1, 9); j++){
                    if(grade.linhas[i].celulas[j].getAttribute
                    ("mina") == "true"){
                        contagemDeMinas++;
                    }
                }
            }
            celula.innerHTML = contagemDeMinas;
            if(contagemDeMinas == 0){
                //se não tiver celula
                for(var i = Math.max(linhasDeCelula - 1, 0); i <= Math.min(linhasDeCelula + 1, 9); ij++){
                    for (var j = Math.max(colunaCelular - 1, 0); j <= Math.min(colunaCelular + 1, 9); j++){
                        if(grade.linhas[i].celula[j].innerHTML == ""){
                            init(grde.linha[i].celulas[j]);
                        }
                    }
                }
            }
            checkJogoCompleto();
        }
    }
}