class Controlador {

    jogador = <h2>"X"</h2>
    temVencedor = false;
    temVelha = false;


    estadojogador() {
        return false;
    }

    turnoJogar() {
        return false;
    }
    start() {

        var botoes = document.getElementsByClassName("btn");
        for (var i = 0; i < botoes.length; i++) {
            var dhat = this;
           

            botoes[i].addEventListener("click", function () {
                dhat.teste(this);
            });



        }

    }
    teste(botao) {
        if (botao.value == "_") {
            botao.value = this.jogador;
            botao.innerText = this.jogador;
            this.verificaGanhador();
            this.empateJogo();

        }

        this.trocarTurno();

    }

    jogar() {


    }
    trocarTurno() {

        if (this.jogador == 'X') {
            this.jogador = 'O';



        } else {
            this.jogador = 'X';



        }

    }
    verificaGanhador() {
        var bnt = document.getElementsByClassName("btn");
        if (bnt[0].textContent== this.jogador && bnt[1].textContent == this.jogador && bnt[2].textContent == this.jogador) {

            bnt[0].style.backgroundColor = '#0F0 !important';
            bnt[1].style.backgroundColor = '#0F0 !important';
            bnt[2].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return 
        }
        if (bnt[3].textContent== this.jogador && bnt[4].textContent== this.jogador && bnt[5].textContent== this.jogador) {
            bnt[3].style.backgroundColor = '#0F0 !important';
            bnt[4].style.backgroundColor = '#0F0 !important';
            bnt[5].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return 
        }
        if (bnt[6].textContent== this.jogador && bnt[7].textContent== this.jogador && bnt[8].textContent== this.jogador) {
            bnt[6].style.backgroundColor = '#0F0 !important';
            bnt[7].style.backgroundColor = '#0F0 !important';
            bnt[8].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return 
        }
        if (bnt[0].textContent== this.jogador && bnt[3].textContent== this.jogador && bnt[6].textContent== this.jogador) {
            bnt[0].style.backgroundColor = '#0F0 !important';
            bnt[3].style.backgroundColor = '#0F0 !important';
            bnt[6].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return 
        }
        if (bnt[1].textContent== this.jogador && bnt[4].textContent== this.jogador && bnt[7].textContent== this.jogador) {
            bnt[1].style.backgroundColor = '#0F0 !important';
            bnt[4].style.backgroundColor = '#0F0 !important';
            bnt[7].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return 
        }
        if (bnt[1].textContent== this.jogador && bnt[5].textContent== this.jogador && bnt[8].textContent== this.jogador) {
            bnt[1].style.backgroundColor = '#0F0 !important';
            bnt[5].style.backgroundColor = '#0F0 !important';
            bnt[8].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return 
        }
        if (bnt[0].textContent== this.jogador && bnt[4].textContent== this.jogador && bnt[8].textContent== this.jogador) {
            bnt[0].style.backgroundColor = '#0F0 !important';
            bnt[4].style.backgroundColor = '#0F0 !important';
            bnt[8].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return 
        }
        if (bnt[2].textContent== this.jogador && bnt[4].textContent== this.jogador && bnt[6].textContent== this.jogador) {
            bnt[2].style.backgroundColor = '#0F0 !important';
            bnt[4].style.backgroundColor = '#0F0 !important';
            bnt[6].style.backgroundColor = '#0F0 !important';

            this.temVencedor = true;
            this.declareVencedor();
            return ;

        }
       
    }

    
    declareVencedor(){

        if(this.temVencedor==true){
            alert("Você é o grande vencedor");
        }
    }

    
    empateJogo() {
        

}
}


controlador = new Controlador();
controlador.start();
