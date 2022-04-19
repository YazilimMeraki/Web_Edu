function hesapla() {
    var boy = ((document.getElementById("Boy").value / 10) * (document.getElementById("Boy").value / 10))
    var Vki = document.getElementById("Kilo").value / boy
    var a = Vki * 100
    document.getElementById("total").innerHTML = a

    if (a <= 18.5) {
        document.getElementById("status").innerHTML = "Düşük kilolu"
    } else if (a <= 24.9 && a > 18.5) {
        document.getElementById("status").innerHTML = "Normal kilolu"
    } else if (a <= 29.9 && a > 25) {
        document.getElementById("status").innerHTML = "Fazla kilolu"
    } else if (a <= 40 && a > 30) {
        document.getElementById("status").innerHTML = "Obez"
    } else {
        document.getElementById("status").innerHTML = "Aşırı obez"
    }
}