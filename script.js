 let pag = document.getElementById("content");
 
 function jogar(){

    let contadorJ = 0;
    let contadorC = 0;

    pag.innerHTML=`<p>Placar</p><div class="conta">
    <div id="pj" class="placar">${contadorJ}</div>
    <div class="placar" id="pc">${contadorC}</div>
    </div>
    <h2>Escolha a sua Jogada</h2> <button id="1">Pedra</button>
    <button id="2">Papel</button>
    <button id="3">Tesoura</button><br><img src="jogador.png" width="100px" height="120px"/>
    <img src="x.png" width="60px" height="80px"/>
    <img src="computador.png" width="100px" height="120px"/>`


const botoes = document.querySelectorAll('button');


botoes.forEach(jogadaJogador => {
  jogadaJogador.addEventListener('click', () => {

    
    let jogadaComputador = Math.floor(Math.random() * 3) + 1;
    
    if(jogadaJogador.id == jogadaComputador){
        alert("EMPATE !!!!");
    }else if(jogadaJogador.id == 1 && jogadaComputador == 2){
        alert(`Computador Ganhou !!!\nJogador: Pedra x Computador: Papel`);
        contadorC++;
    }else if(jogadaJogador.id == 1 && jogadaComputador == 3){
        alert(`Jogador Ganhou !!!\nJogador: Pedra x Computador: Tesoura `);
        contadorJ++;
    }else if(jogadaJogador.id == 2 && jogadaComputador == 3){
        alert(`Computador Ganhou !!!\nJogador: Papel x Computador: Tesoura`);
        contadorC++;
    }else if(jogadaJogador.id == 2 && jogadaComputador == 1){
        alert(`Jogador Ganhou !!!\nJogador: Papel x Computador: Pedra`);
        contadorJ++;
    }else if(jogadaJogador.id == 3 && jogadaComputador == 1){
        alert(`Computador Ganhou !!!\nJogador: Tesoura x Computador: Pedra`);
        contadorC++;
    }else if(jogadaJogador.id == 3 && jogadaComputador == 2){
        alert(`Jogador Ganhou !!!\nJogador: Tesoura x Computador: Papel`);
        contadorJ++;
    }
    



    document.getElementById("pj").textContent = contadorJ;
    document.getElementById("pc").textContent = contadorC;




  });
});


 }