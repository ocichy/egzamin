var elPodst=document.getElementById('podstawa');
var elWyk=document.getElementById('wykladnik');
var elPrzycisk=document.getElementById('przycisk');
var elBlok=document.getElementById('blok');
var a=parseInt(elPodst);
var b=parseInt(elWyk);
elPrzycisk.onclick=function() {
    if (elPodst=="" && elWyk==""){
        elBlok.innerHTML="Podaj liczby";
    }
    else {
    var wynik=a^b;
    elBlok.innerHTML=wynik;
    }
}
