//Bir ögrencinin bilgilerini alip, yil sonu ortalamasini ögrenelim

var isim=prompt("isim giriniz: ");
var num=prompt("numara giriniz: ");
var ders=prompt("ders giriniz: ");
var yazili1=prompt("1. yazili notu: ");
var yazili2=prompt("2. yazili notu: ");

var ortalama=((Number(yazili1)+Number(yazili2))/2);
console.log(isim+" adli ögrencinin "+ders+" dersindeki yil sonu ortalamasi "+ortalama);
