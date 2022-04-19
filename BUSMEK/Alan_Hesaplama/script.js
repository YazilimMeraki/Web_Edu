var pi = parseFloat(3.14)


function D_Alan() {
    /* Daire Alan = pi r 2 */
    var sonuc = parseFloat(pi) * document.getElementById("yarim").value * document.getElementById("yarim").value
    document.getElementById("sonucA").value = sonuc
    document.getElementById("imagess").src = "img/daire.png"
}

function K_Hacim() {
    /* V = (4/3)πr³ */
    var sonuc = (3 / 4) * parseFloat(pi) * document.getElementById("yarimkure").value * document.getElementById("yarimkure").value * document.getElementById("yarimkure").value
    document.getElementById("sonucH").value = sonuc
    document.getElementById("imagess").src = "img/küre.png"
}

function U_Alan() {
    /* A = 1/2 * taban * yükseklik */
    var sonuc = (1 / 2) * document.getElementById("u_taban").value * document.getElementById("u_yukseklik").value
    document.getElementById("sonucA").value = sonuc
    document.getElementById("imagess").src = "img/üçgen.png"

}

function U_Hacim() {
    /*  Taban * Yükseklik = hacim */
    var sonuc = document.getElementById("u_taban2").value * document.getElementById("u_yukseklik2").value
    document.getElementById("sonucH").value = sonuc
    document.getElementById("imagess").src = "img/üçgenprizma.png"

}

function Kare_Alan() {
    /*  <!-- a*a = Alan--> */
    var sonuc = document.getElementById("uzunluk").value * document.getElementById("uzunluk").value
    document.getElementById("sonucA").value = sonuc
    document.getElementById("imagess").src = "img/kare.png"

}

function Küp_Hacim() {
    /* <!-- a*a*a --> */
    var sonuc = document.getElementById("uzunluk").value * document.getElementById("uzunluk").value * document.getElementById("uzunluk").value
    document.getElementById("sonucH").value = sonuc
    document.getElementById("imagess").src = "img/Küp.png"

}

function Dikdortgen() {
    /* <!-- K*U--> */
    var sonuc = document.getElementById("Dik_kenar_u").value * document.getElementById("Kısa_Kenar_d").value
    document.getElementById("sonucA").value = sonuc
    document.getElementById("imagess").src = "img/dikdörtgen.png"

}

function Dikprizma() {
    var sonuc = document.getElementById("Y_prizma").value * document.getElementById("W_prizma").value * document.getElementById("Kısa_Kenar_di").value
    document.getElementById("sonucH").value = sonuc
    document.getElementById("imagess").src = "img/dikdörtgenprizma.png"

}

function Yamık() {
    var sonuc = ((document.getElementById("Y_taban").value + document.getElementById("Y_ütaban").value) / 2) * document.getElementById("Y_yuksek").value
    document.getElementById("sonucA").value = sonuc
    document.getElementById("imagess").src = "img/yamuk.png"


}