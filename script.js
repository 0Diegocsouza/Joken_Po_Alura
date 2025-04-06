 let pag = document.getElementById("content");

 function jogar(){
    
    let contadorJ = 0;
    let contadorC = 0;
    let rodadas = 0;
    pag.innerHTML=`<p>Placar</p><div class="conta">
    <div id="pj" class="placar">${contadorJ}</div>
    <div class="placar" id="pc">${contadorC}</div>
    </div>
    <h2>Escolha a sua Jogada</h2> <button id="1">Pedra</button>
    <button id="2">Papel</button>
    <button id="3">Tesoura</button><br><img src="jogador.png" width="100px" height="120px"/>
    <img src="x.png" width="60px" height="80px"/>
    <img src="computador.png" width="100px" height="120px"/>`
   

    
//Seleciona todos os botôes
const botoes = document.querySelectorAll('button');

//Percorre todos os botões e cria uma função anonima
botoes.forEach(jogadaJogador => {
  jogadaJogador.addEventListener('click', () => {
   
    
    let jogadaComputador = Math.floor(Math.random() * 3) + 1;
    
    if(jogadaJogador.id == jogadaComputador){
        alert("EMPATE !!!!");
        rodadas--;
    }else if(jogadaJogador.id == 1 && jogadaComputador == 2){
        contadorC++;
        alert(`Computador Ganhou !!!\nJogador: Pedra x Computador: Papel`);
        
    }else if(jogadaJogador.id == 1 && jogadaComputador == 3){
        contadorJ++;
        alert(`Jogador Ganhou !!!\nJogador: Pedra x Computador: Tesoura `);
        
    }else if(jogadaJogador.id == 2 && jogadaComputador == 3){
        contadorC++;
        alert(`Computador Ganhou !!!\nJogador: Papel x Computador: Tesoura`);
        
    }else if(jogadaJogador.id == 2 && jogadaComputador == 1){
        contadorJ++;
        alert(`Jogador Ganhou !!!\nJogador: Papel x Computador: Pedra`);
        
    }else if(jogadaJogador.id == 3 && jogadaComputador == 1){
        contadorC++;
        alert(`Computador Ganhou !!!\nJogador: Tesoura x Computador: Pedra`);
        
    }else if(jogadaJogador.id == 3 && jogadaComputador == 2){
        contadorJ++;
        alert(`Jogador Ganhou !!!\nJogador: Tesoura x Computador: Papel`);
        
    }
    
    document.getElementById("pj").textContent = contadorJ;
    document.getElementById("pc").textContent = contadorC;
    rodadas++;
  
    if(rodadas >=10 && contadorC>contadorJ){
        pag.innerHTML=`<h2>Não Foi dessa vez :(</h2><p>Computador Ganhou com ${contadorC} Pontos<br><img src="vencedor_c.png" width="250px" heigth="300px"><br><button onclick="jogar()">Jogar Novamente</button>`;
    }else if(rodadas >=10 && contadorJ>contadorC){
        pag.innerHTML=`<h2>Parabéns Você ganhou</h2><p>Jogador Ganhou com ${contadorJ} Pontos<br><img src="vencedor_j.png" width="250px" heigth="300px"><br><button onclick="jogar()">Jogar Novamente</button>`;
    }

  });
});


 }