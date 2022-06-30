console.log("hello world")

var health=[40,40,40,40]

var TokenBoard3 = document.getElementById('tboard3').innerHTML

function drawhealth(){
    document.getElementById("P1L").innerHTML=`${health[0]}`
    document.getElementById("P2L").innerHTML=`${health[1]}`
    document.getElementById("P3L").innerHTML=`${health[2]}`
    document.getElementById("P4L").innerHTML=`${health[3]}`
}


function addToken(x){
    var color = document.getElementById(`tokenColor${x}`).value
    var power = document.getElementById(`tokenPower${x}`).value
    var defense = document.getElementById(`tokenDefense${x}`).value
    document.getElementById(`tboard${x}`).innerHTML = document.getElementById(`tboard${x}`).innerHTML + 
    `<div class="token" onmousedown="tap(this)" style="background-color:${color}">
        <p>Token</p>
        <p>${power}/${defense}</p>
        <button onmousedown="remove(this)">Remove</button>
    </div>`

}



drawhealth()

function tap(element){
    console.log(element.outerHTML)
    var innerdiv = element.innerHTML
    var color = element.style.backgroundColor
    element.outerHTML = `<div class="token" onmousedown="untap(this)" style="background-color:${color}; transform:rotate(90deg)">
    ${innerdiv}
</div>`
}

function untap(element){
    console.log(element.outerHTML)
    var innerdiv = element.innerHTML
    var color = element.style.backgroundColor
    element.outerHTML = `<div class="token" onmousedown="tap(this)" style="background-color:${color}">
    ${innerdiv}
</div>`
}

function remove(element){
    element.parentElement.remove(this)
    drawhealth()
}
// remove has known error where as it is a part of the parent div during the remove function you also activate the tap or untap function. Since you remove the element before element.outerhtml is modified it reads an error. the error is only on console log and causes no issue in actual use as stated before the parent element needs to be removed when this function activates

function heal(x){
    health[x] ++
    drawhealth()
}

function hurt(x){
    health[x] --
    drawhealth()
}
