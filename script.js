console.log("hello world")

var health=[40,40,40,40]

var TokenBoard3 = document.getElementById('tboard3').innerHTML

function drawhealth(){
    document.getElementById("P1L").innerHTML=`${health[0]}`
    document.getElementById("P2L").innerHTML=`${health[1]}`
    document.getElementById("P3L").innerHTML=`${health[2]}`
    document.getElementById("P4L").innerHTML=`${health[3]}`
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

function heal(x){
    health[x] ++
    drawhealth()
}

function hurt(x){
    health[x] --
    drawhealth()
}

console.log(document.getElementById('tboard3').innerHTML)