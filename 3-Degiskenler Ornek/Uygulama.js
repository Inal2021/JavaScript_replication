//Bir √∂grencinin bilgilerini alip, yil sonu ortalamasini √∂grenelim

var isim=prompt("isim giriniz: ");
var num=prompt("numara giriniz: ");
var ders=prompt("ders giriniz: ");
var yazili1=prompt("1. yazili notu: ");
var yazili2=prompt("2. yazili notu: ");

var ortalama=((Number(yazili1)+Number(yazili2))/2);
console.log(isim+" adli √∂grencinin "+ders+" dersindeki yil sonu ortalamasi "+ortalama);
