var sayac = 5

function Timer() {

    sayac--
    document.getElementById("Deneme").innerHTML = sayac

    if (sayac == 0) {
        window.location.href = "index2.html"
    }

}

function start() {
    sdur = setInterval(Timer, 1000)
}