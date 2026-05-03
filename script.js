const tempo= document.getElementById("tempo")

let tempoTotal=1500 //tempo total em segundos
let tempoInicial=1500
let timer

//ai ficar mostrando o tempo na página em minutos e segundos
function mostrarTempo(){
    const minutos= Math.floor(tempoTotal/60).toString().padStart(2,"0")
    const segundos= (tempoTotal % 60).toString().padStart(2,"0")
    tempo.innerHTML= minutos + ":"+segundos
}

//vai atualizando/diminuindo o tempo total 
function atualizar(){
    if(tempoTotal>0){
        tempoTotal--
        mostrarTempo()
    }
    else{
        pausar()
    }
}

//vai iniciar, atualizando a cada segundo (1000 miliseg) e verifica se já foi clicado pra nao chamar mais vezes
function iniciar(){
    if (!timer){
    timer=setInterval(atualizar,1000)
    }
}

//interrompe o contador e reinicia o tempo parado nos 25 minutos
function zerar(){
    clearInterval(timer)
    tempoTotal=tempoInicial
    mostrarTempo()
    timer=null

}

//interrompe o contador
function pausar(){
    clearInterval(timer)
    timer=null
}
