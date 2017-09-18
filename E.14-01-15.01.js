var elPierwsza=document.getElementById('pierwsza');
var elDruga=document.getElementById('druga');
var elBlok=document.getElementById('blok');
var elDod=document.getElementById('dodawanie');
var elOd=document.getElementById('odejmowanie');
var elMno=document.getElementById('mnozenie');
var elDziel=document.getElementById('dzielenie');
var a=parseFloat(elPierwsza.value);
var b=parseFloat(elDruga.value);

elDod.onclick=function() {
    var wynik=a+b;
    elBlok.innerHTML=wynik;
}
