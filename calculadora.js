function n1(){

    let n1 = document.getElementById("n1").value 
    let n2 = document.getElementById("n2").value
    let resultado = document.getElementById("resultado").innerHTML = parseInt(n1) + parseInt(n2)

}

let paragrafo = document.createElement("p")

paragrafo.innerText ="Segunda tem jogo" 

document.body.appendChild(paragrafo)

function D1(){
    document.getElementById('D1').classList.add('classe1','classe2','classe3')
}

function D2(){
    document.getElementById('D1').classList.remove('classe1','classe2','classe3')
}


