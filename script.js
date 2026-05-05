const tempo= document.getElementById("tempo")
const mensagem=document.getElementById("mensagem")

let tempoTotal=1500 //tempo total em segundos
let tempoInicial=1500 
let progresso=0
let timer
let tipoSessao
let ciclos=0
const foco="foco"
const pausaCurta="pausaCurta"
const pausaLonga="pausaLonga"

//mostra o tempo na página em minutos e segundos
function mostrarTempo(){
        const minutos= Math.floor(tempoTotal/60).toString().padStart(2,"0")
        const segundos= (tempoTotal % 60).toString().padStart(2,"0")
        tempo.innerHTML= minutos + ":"+segundos

    }

//vai atualizando/diminuindo o tempo total
//atualiza progresso da barra 
function atualizar(){
        if(tempoTotal>0){
            tempoTotal--
            mostrarTempo()
            progresso=(tempoInicial-tempoTotal)/tempoInicial*100
            const barraProgresso= document.getElementById("barra")
            barraProgresso.style.width=progresso + "%"
        }
        else{
            definirSessao()
            tocarAudio()
            pausar()
        }
    }


//vai iniciar, atualizando a cada segundo (1000 miliseg) e verifica se já foi clicado pra nao chamar mais vezes
//verifica se é a primeira sessão, se for, exibe a mensagem de foco
function iniciar(){
    if (!timer){
    timer=setInterval(atualizar,1000)
    }
    if (!tipoSessao){
        tipoSessao=foco
        mensagem.innerHTML="Hora do foco!"
    }
}

//interrompe o contador e reinicia o tempo parado nos 25 minutos
function zerar(){
    pausar()
    tempoTotal=tempoInicial
    mostrarTempo()
    const barraProgresso= document.getElementById("barra")
    progresso=0
    barraProgresso.style.width=progresso + "%"

}

//interrompe o contador
function pausar(){
    clearInterval(timer)
    timer=null
}

//conta 5 minutos de pausa curta ou 15 min de pausa longa
function definirSessao(){
    if (tipoSessao==foco){
        ciclos++

         if(ciclos %4==0){
            tipoSessao=pausaLonga
            tempoInicial=900
            tempoTotal=900
            mensagem.innerHTML= "Hora da pausa!"

        }
        else{
            tipoSessao=pausaCurta
            tempoInicial=300
            tempoTotal=300
            mensagem.innerHTML= "Hora da pausa!"

        }
    }
    else{
        tipoSessao=foco
        tempoInicial=1500
        tempoTotal=1500
        mensagem.innerHTML= "Hora do foco!"
    }
    mostrarTempo()
}

function tocarAudio(){
    let audio=document.getElementById("audio")
    audio.play()
}