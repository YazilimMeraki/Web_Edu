var color = ["Black", "Red", "pink", "aqua", "orange"]
var sayac = 0
var div = document.getElementById("color").style


function start() {
    sdur = setInterval(Timer, 1000)

}

function Timer() {
    sayac++
    var rand = Math.floor(Math.random() * 5)
    var randa = Math.floor(Math.random() * 5)
    var div = document.getElementById("color").style.backgroundColor = color[rand]
    document.body.style.backgroundColor = color[randa]

}

function colorch() {
    start()

}
var colora = ["Black", "Red", "pink", "aqua", "orange"]
var sayaca = 0

function starta() {
    sdur = setInterval(Timera, 1000)
}

function Timera() {
    sayaca++
    var randsa = Math.floor(Math.random() * 5)
    document.body.style.backgroundColor = colora[randsa]

}

function colorcha() {
    starta()

}