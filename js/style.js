var segundos = 00
var minutos = 00
var interval


function Começar(){
    interval = setInterval(contar,1000)

}

function Stop(){
    clearInterval(interval)

}

function Paralisar(){
    clearInterval(interval)
    segundos=00
    minutos=00
    document.getElementsByClassName('Tempo').innerText='00:00'
   


}


function contar(){
    segundos++
    if(segundos==60){
        minutos++
        segundos=0
    }
    document.getElementById('Tempo').innerText=minutos+':'+segundos
}