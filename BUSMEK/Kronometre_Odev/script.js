var sayac = 0

function Timer() {

    sayac++
    document.getElementById("yazi").innerHTML = sayac
}

function start() {
    sdur = setInterval(Timer, 1000)

}

function pause() {
    clearTimeout(sdur)
    document.getElementById("yazi").innerHTML = sayac
}

function cleara() {
    clearInterval()
    clearTimeout(sdur)
    sayac = 0
    document.getElementById("yazi").innerHTML = 0
    console.log(sayac)
}