/* (haftalık * 4)*saatlik ücret *kdv */

function hesapla() {
    var sonuc = ((document.getElementById("haftalık").value * 4) * document.getElementById("saatlik").value) * (document.getElementById("kdv").value / 100)
    document.getElementById("total").innerHTML = ((document.getElementById("haftalık").value * 4) * document.getElementById("saatlik").value) - sonuc
    console.log(((document.getElementById("haftalık").value * 4) * document.getElementById("saatlik").value) - sonuc)
}