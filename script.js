console.log("hello world")

var P1health=40
var P2health=40
var P3health=40
var P4health=40

var TokenBoard3 = document.getElementById('tboard3').innerHTML

function drawhealth(){
    document.getElementById("P1L").innerHTML=`${P1health}`
    document.getElementById("P2L").innerHTML=`${P2health}`
    document.getElementById("P3L").innerHTML=`${P3health}`
    document.getElementById("P4L").innerHTML=`${P4health}`
}

function drawToken(){
    TokenBoard1 = document.getElementById('tboard1').innerHTML
    TokenBoard2 = document.getElementById('tboard2').innerHTML
    TokenBoard3 = document.getElementById('tboard3').innerHTML
    TokenBoard4 = document.getElementById('tboard4').innerHTML
}

function addToken(x){
    document.getElementById(`tboard${x}`).innerHTML = document.getElementById(`tboard${x}`).innerHTML + 
    `<div class="token" onmousedown="remove(this)">
        <p>Token</p>
        <p>1/1</p>
    </div>`

    drawToken()
}



drawhealth()

function remove(element){
    element.remove(this)
    drawToken()
    drawhealth()
}

function P1heal(){
    P1health ++
    drawhealth()
}

function P1hurt(){
    P1health --
    drawhealth()
}

function P2heal(){
    P2health ++
    drawhealth()
}

function P2hurt(){
    P2health --
    drawhealth()
}

function P3heal(){
    P3health ++
    drawhealth()
}

function P3hurt(){
    P3health --
    drawhealth()
}

function P4heal(){
    P4health ++
    drawhealth()
}

function P4hurt(){
    P4health --
    drawhealth()
}

console.log(document.getElementById('tboard3').innerHTML)